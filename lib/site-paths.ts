const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";

export const siteBasePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

export function sitePath(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteBasePath}${normalizedPath}`;
}

export function siteUrl(path = "/") {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ??
    "https://rino-working-preview.trapezy.chatgpt.site";
  const origin = new URL(configuredUrl).origin;
  return new URL(sitePath(path), origin).toString();
}
