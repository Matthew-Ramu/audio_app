import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const jobs = [
  {
    html: "damping.html",
    frag: "frag-tool-damping.js",
    before: `          errDamping: "請輸入有效阻抗（耳機須為正數，輸出須≥0）。",
        },
      };
      function getStrings(lang) {`,
    after: `          errDamping: "請輸入有效阻抗（耳機須為正數，輸出須≥0）。",
        },
`,
  },
  {
    html: "cable.html",
    frag: "frag-tool-cable.js",
    before: `          errCable: "請確認長度、線材類型與負載為正。",
        },
      };
      function getStrings(lang) {`,
    after: `          errCable: "請確認長度、線材類型與負載為正。",
        },
`,
  },
  {
    html: "hq-filters.html",
    frag: "frag-tool-hq.js",
    before: `          hqFilterTableHtml: "<table class=\\"hq-compare-table\\"><thead><tr><th scope=\\"col\\">濾波／概念</th><th scope=\\"col\\">負載感</th><th scope=\\"col\\">適用情境（經驗）</th></tr></thead><tbody><tr><td><code>1×</code></td><td>較輕</td><td>不改速率直接噪聲整形 — 省算力、先求穩定播放。</td></tr><tr><td><code>N×</code>（2×／4×…）</td><td>較重</td><td>升頻後再 SDM — 與 CPU 等級、緩衝一起調。</td></tr><tr><td><code>poly-sinc-short-mp</code></td><td>最短抽頭</td><td>入門算力、長時間聆聽優先流暢。</td></tr><tr><td><code>poly-sinc-xla</code></td><td>中長 XL</td><td>中階 CPU 的日常平衡選項。</td></tr><tr><td><code>poly-sinc-long-hp</code> 等</td><td>長 sinc</td><td>散熱與緩衝有餘裕再開。</td></tr><tr><td><code>poly-sinc-gauss-*</code></td><td>高斯窗 · 最重</td><td>旗艦算力、追求高倍率 DSD 路徑。</td></tr><tr><td>最小相位／線性相位</td><td>預鈴／延遲取捨</td><td><code>-mp</code> 與 <code>-lp</code> 影響脈衝響應形狀。</td></tr></tbody></table>",
        },
      };
      function getStrings(lang) {`,
    after: `          hqFilterTableHtml: "<table class=\\"hq-compare-table\\"><thead><tr><th scope=\\"col\\">濾波／概念</th><th scope=\\"col\\">負載感</th><th scope=\\"col\\">適用情境（經驗）</th></tr></thead><tbody><tr><td><code>1×</code></td><td>較輕</td><td>不改速率直接噪聲整形 — 省算力、先求穩定播放。</td></tr><tr><td><code>N×</code>（2×／4×…）</td><td>較重</td><td>升頻後再 SDM — 與 CPU 等級、緩衝一起調。</td></tr><tr><td><code>poly-sinc-short-mp</code></td><td>最短抽頭</td><td>入門算力、長時間聆聽優先流暢。</td></tr><tr><td><code>poly-sinc-xla</code></td><td>中長 XL</td><td>中階 CPU 的日常平衡選項。</td></tr><tr><td><code>poly-sinc-long-hp</code> 等</td><td>長 sinc</td><td>散熱與緩衝有餘裕再開。</td></tr><tr><td><code>poly-sinc-gauss-*</code></td><td>高斯窗 · 最重</td><td>旗艦算力、追求高倍率 DSD 路徑。</td></tr><tr><td>最小相位／線性相位</td><td>預鈴／延遲取捨</td><td><code>-mp</code> 與 <code>-lp</code> 影響脈衝響應形狀。</td></tr></tbody></table>",
        },
`,
  },
  {
    html: "db.html",
    frag: "frag-tool-db.js",
    before: `          errDb: "請輸入有效數字。",
        },
      };
      function getStrings(lang) {`,
    after: `          errDb: "請輸入有效數字。",
        },
`,
  },
];

for (const job of jobs) {
  const htmlPath = path.join(__dirname, job.html);
  const fragPath = path.join(__dirname, job.frag);
  let html = fs.readFileSync(htmlPath, "utf8");
  if (!html.includes(job.before)) {
    console.error("Anchor not found:", job.html);
    process.exit(1);
  }
  const frag = fs.readFileSync(fragPath, "utf8").replace(/\r?\n/g, "\n");
  const tail = `
      };
      function getStrings(lang) {`;
  html = html.replace(job.before, job.after + "\n" + frag + tail);
  fs.writeFileSync(htmlPath, html.replace(/\n/g, "\r\n"));
  console.log("OK", job.html);
}
