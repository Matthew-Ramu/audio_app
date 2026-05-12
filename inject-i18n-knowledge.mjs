import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
void __dirname;

console.log("inject-i18n-knowledge: skipped (no extra locale fragments).");
