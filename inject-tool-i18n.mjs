import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
void __dirname;

console.log("inject-tool-i18n: skipped (no extra locale fragments).");
