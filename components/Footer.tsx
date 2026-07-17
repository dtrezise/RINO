import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-mark">RINO</div>
          <p>A WORKING exploration of a proposed U.S. political party for productive disagreement.</p>
        </div>
        <div>
          <h2>Project</h2>
          <Link href="/status/">Formation status</Link>
          <Link href="/corrections/">Corrections</Link>
          <Link href="/methods/">Methods</Link>
        </div>
        <div>
          <h2>Ground rules</h2>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <a href="/data/rino-public-export.json">Public data export</a>
        </div>
      </div>
      <div className="footer-fineprint">
        <span>© 2026 RINO working project</span>
        <span>Not authorized to solicit contributions. No donations are accepted.</span>
      </div>
    </footer>
  );
}
