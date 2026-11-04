const path = require("path");

module.exports = {
  stylesheet: [],
  css: `
    body { font-family: Georgia, 'Times New Roman', serif; font-size: 9.5pt; line-height: 1.45; color: #1c242a; }
    h1 { font-size: 17pt; border-bottom: 2px solid #9c4e2b; padding-bottom: 6px; color: #12202a; }
    h2, h3 { font-size: 12pt; color: #12202a; }
    p { margin: 6px 0; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 7.6pt; font-family: 'Segoe UI', Arial, sans-serif; word-wrap: break-word; }
    thead { display: table-header-group; }
    th, td { border: 1px solid #b9c2c7; padding: 4px 5px; vertical-align: top; }
    th { background: #12202a; color: #f3f4f2; text-align: left; }
    tr:nth-child(even) td { background: #f6f7f5; }
    tr { page-break-inside: avoid; }
    th:nth-child(1), td:nth-child(1) { width: 9%; }
    th:nth-child(2), td:nth-child(2) { width: 20%; }
    th:nth-child(3), td:nth-child(3) { width: 34%; }
    th:nth-child(4), td:nth-child(4) { width: 27%; }
    th:nth-child(5), td:nth-child(5) { width: 10%; }
    strong { color: #12202a; }
    a { color: #9c4e2b; }
    code { font-size: 8.5pt; background: #eef0ee; padding: 0 3px; border-radius: 2px; }
  `,
  pdf_options: {
    format: "A4",
    landscape: true,
    printBackground: true,
    margin: { top: "14mm", bottom: "14mm", left: "12mm", right: "12mm" },
  },
};
