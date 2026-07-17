"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ShareComposerProps = {
  title: string;
  status: string;
  summary: string;
  slug: string;
};

export function ShareComposer({ title, status, summary, slug }: ShareComposerProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState("");
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [copy, setCopy] = useState(`${title} — ${status}. ${summary}`);
  const shareUrl = open && typeof window !== "undefined"
    ? `${window.location.origin}/evidence/${slug}/`
    : `/evidence/${slug}/`;

  const destinations = useMemo(() => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedCopy = encodeURIComponent(copy);
    return [
      { name: "X", href: `https://x.com/intent/post?text=${encodedCopy}&url=${encodedUrl}` },
      { name: "Bluesky", href: `https://bsky.app/intent/compose?text=${encodeURIComponent(`${copy} ${shareUrl}`)}` },
      { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
      { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
      { name: "Email", href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${copy}\n\n${shareUrl}`)}` },
    ];
  }, [copy, shareUrl, title]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        openerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => openerRef.current?.focus());
  };

  const copyText = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
    } catch {
      setCopied("Copy is unavailable in this browser");
    }
    setTimeout(() => setCopied(""), 1800);
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title, text: copy, url: shareUrl }); } catch { /* A dismissed share sheet is not an error. */ }
    }
    else await copyText(`${copy} ${shareUrl}`, "Post copied");
  };

  return (
    <>
      <button ref={openerRef} className="button button-ink" type="button" onClick={() => setOpen(true)}>
        Share evidence
      </button>
      {open ? (
        <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && close()}>
          <section className="share-dialog" role="dialog" aria-modal="true" aria-labelledby={`share-title-${slug}`}>
            <button ref={closeRef} className="dialog-close" type="button" onClick={close} aria-label="Close share composer">×</button>
            <div className="share-banner" aria-hidden="true">
              <span>RINO / EVIDENCE</span>
              <strong>{status}</strong>
            </div>
            <p className="eyebrow">Share a round-trip record</p>
            <h2 id={`share-title-${slug}`}>{title}</h2>
            <label htmlFor={`share-copy-${slug}`}>Prepared post copy</label>
            <textarea id={`share-copy-${slug}`} value={copy} onChange={(event) => setCopy(event.target.value)} rows={5} />
            <p className="roundtrip-url">{shareUrl}</p>
            <div className="share-destinations" aria-label="Share destinations">
              {destinations.map((destination) => (
                <a key={destination.name} href={destination.href} target="_blank" rel="noreferrer" onClick={() => {
                  if (["Facebook", "LinkedIn"].includes(destination.name)) void copyText(copy, "Commentary copied");
                }}>
                  {destination.name}
                </a>
              ))}
              <button type="button" onClick={() => void copyText(copy, "Instagram copy prepared")}>Instagram</button>
            </div>
            <div className="dialog-actions">
              <button className="button" type="button" onClick={() => void copyText(copy, "Post copied")}>Copy post</button>
              <button className="button" type="button" onClick={() => void copyText(shareUrl, "Link copied")}>Copy link</button>
              <button className="button button-gold" type="button" onClick={() => void nativeShare()}>Device share</button>
            </div>
            <p className="copy-status" role="status">{copied}</p>
          </section>
        </div>
      ) : null}
    </>
  );
}
