import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const nl = (s) => s.replace(/\r\n/g, "\n");
const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, "knowledge.html");
const fragPath = join(__dirname, "i18n-rda-knowledge-fragment.js");

let html = nl(fs.readFileSync(htmlPath, "utf8"));
const frag = nl(fs.readFileSync(fragPath, "utf8"));

const anchor =
  '          footerNote: "參考工具 · 與 HQPLAYER 無商業關聯"\n' +
  "        }\n" +
  "      };\n" +
  "\n" +
  "      function getStrings(lang)";

const replacement =
  '          footerNote: "參考工具 · 與 HQPLAYER 無商業關聯"\n' +
  "        },\n" +
  frag +
  "\n      };\n" +
  "\n" +
  "      function getStrings(lang)";

if (!html.includes(anchor)) {
  console.error("Anchor not found in knowledge.html");
  process.exit(1);
}
html = html.replace(anchor, replacement);
fs.writeFileSync(htmlPath, html.replace(/\n/g, "\r\n"), "utf8");
console.log("Patched knowledge.html");
