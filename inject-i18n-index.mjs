import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, "index.html");
const fragPath = join(__dirname, "i18n-rda-index-fragment.js");

const nl = (s) => s.replace(/\r\n/g, "\n");

let html = nl(fs.readFileSync(indexPath, "utf8"));
const frag = nl(fs.readFileSync(fragPath, "utf8"));

const anchor =
  '              v +\n' +
  '              "</strong> V<sub>rms</sub>（RCA × 2）"\n' +
  "            );\n" +
  "          }\n" +
  "        }\n" +
  "      };\n" +
  "\n" +
  "      function getStrings(lang)";

const replacement =
  '              v +\n' +
  '              "</strong> V<sub>rms</sub>（RCA × 2）"\n' +
  "            );\n" +
  "          }\n" +
  "        },\n" +
  frag +
  "\n      };\n" +
  "\n" +
  "      function getStrings(lang)";

if (!html.includes(anchor)) {
  console.error("Anchor not found in index.html");
  process.exit(1);
}
html = html.replace(anchor, replacement);
fs.writeFileSync(indexPath, html.replace(/\n/g, "\r\n"), "utf8");
console.log("Patched index.html");
