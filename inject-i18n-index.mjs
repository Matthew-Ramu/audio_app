import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
void __dirname;

// Previously merged ru/de/ar from i18n-rda-index-fragment.js into index.html.
// Locales are now limited to en, ja, zh-CN, zh-TW only; injection is disabled.
console.log("inject-i18n-index: skipped (no extra locale fragments).");
