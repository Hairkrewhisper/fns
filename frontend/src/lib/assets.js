// Helper для разрешения путей к ассетам.
// В standalone-режиме отдаёт /images/...
// В WordPress-режиме (если functions.php передал FNS_THEME.assetsUrl) — отдаёт тему-URL.
export function assetUrl(path) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (typeof window !== "undefined" && window.FNS_THEME?.assetsUrl) {
    return `${window.FNS_THEME.assetsUrl}${clean}`;
  }
  return clean;
}
