#!/usr/bin/env node
/* Precompile the React UI: web/js/bundle.jsx -> web/js/bundle.js
 *
 * The app ships the precompiled bundle.js so end users need nothing but Python
 * (no in-browser Babel transpile -> instant load). After editing bundle.jsx,
 * regenerate the output:
 *
 *     npm install     # one time, installs @babel/standalone (dev only)
 *     npm run build
 *
 * Runtime stays zero-dependency Python; Node/Babel are only needed to rebuild
 * the bundle when a contributor changes the UI source.
 */
const fs = require("fs");
const path = require("path");

let Babel;
try {
  Babel = require("@babel/standalone");
} catch (e) {
  console.error("Missing @babel/standalone. Run `npm install` first.");
  process.exit(1);
}

const root = path.resolve(__dirname, "..");
const SRC = path.join(root, "web", "js", "bundle.jsx");
const OUT = path.join(root, "web", "js", "bundle.js");

const src = fs.readFileSync(SRC, "utf8");
const { code } = Babel.transform(src, {
  presets: ["react"],
  sourceType: "script",   // classic script: IIFEs + window.* globals, not an ES module
  filename: "bundle.jsx",
  compact: false,
});

const header = "/* AUTO-GENERATED from bundle.jsx by tools/build.js — do not edit directly. */\n";
fs.writeFileSync(OUT, header + code + "\n");
console.log("built web/js/bundle.js (" + (header.length + code.length) + " bytes)");
