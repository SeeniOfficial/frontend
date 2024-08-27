if (!self.define) {
  let e,
    s = {};
  const c = (c, i) => (
    (c = new URL(c + ".js", i).href),
    s[c] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, r) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[o]) return;
    let a = {};
    const n = (e) => c(e, o),
      f = { module: { uri: o }, exports: a, require: n };
    s[o] = Promise.all(i.map((e) => f[e] || n(e))).then((e) => (r(...e), a));
  };
}
define(["./workbox-9a84fccb"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: "eslint.config.js",
          revision: "bfe13b9e25d0af7959d0396aa103d88c",
        },
        { url: "index.html", revision: "d528444e8074bb97a008b9e77ca9e991" },
        { url: "jsconfig.json", revision: "31d716c3a0249fde6cf3b2716a03bfbb" },
        {
          url: "package-lock.json",
          revision: "77b2a79b68c4419ea56e3856a189a97e",
        },
        { url: "package.json", revision: "0694d2931103f6be6efcab07a27e0a67" },
        {
          url: "postcss.config.js",
          revision: "ef3ba2a81ba19f8ea5ddf625521e96f0",
        },
        {
          url: "public/manifest.json",
          revision: "a68f1ac06822dccbd2e95eae66db6f93",
        },
        {
          url: "public/vite.svg",
          revision: "8e3a10e157f75ada21ab742c022d5430",
        },
        { url: "README.md", revision: "1dfcb98fb0236ca209793b23d90c2d2a" },
        { url: "src/App.jsx", revision: "bdb70b7ddf18b91f06b2a55f55b549c3" },
        {
          url: "src/assets/react.svg",
          revision: "f0402b67b6ce880f65666bb49e841696",
        },
        {
          url: "src/components/Content.jsx",
          revision: "6e58118d00aa6e4172da028ff13d1774",
        },
        {
          url: "src/components/Layout.jsx",
          revision: "615978fc97688bacbc2cbbcdfc95a826",
        },
        {
          url: "src/hooks/toogleAppTheme.jsx",
          revision: "3a50878ce7b3cf4f458f6c6413c7a150",
        },
        { url: "src/index.css", revision: "80562adf2ca0ca3808acbb1e766821b4" },
        { url: "src/main.jsx", revision: "1a09784350cddbc4a2fddad944b24a91" },
        {
          url: "src/routes/AppRoutes.jsx",
          revision: "e274f02cc4665f78758049f190d15eb3",
        },
        {
          url: "tailwind.config.js",
          revision: "4f688746d3e14cad510b1f7ed44e58bf",
        },
        { url: "vite.config.js", revision: "56d0a437acbed0ac7772ec9dba153b07" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
