# Patokan Frontend/UI-UX (skills.sh)

Sumber ranking: [skills.sh](https://www.skills.sh/) — All-Time Leaderboard + Topic [Design & UI](https://www.skills.sh/topic/design), diambil **2026-11-05**.

5 skill ini adalah rujukan baku untuk **semua** kerja design, redesign, audit, dan motion frontend di repo ini. Terdokumentasi di routing pstack (`.opencode/skill/poteto-mode/SKILL.md`, seksi *UI/UX tasks*) dan `poteto-help`.

## 5 Patokan

| # | Skill | Sumber | Installs ⇠ skills.sh | Peran | Kapan dipakai |
|---|-------|--------|----------------------|-------|---------------|
| 1 | `design-taste-frontend` (v2) | [leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | ±731K | Art direction utama: script deals **3 directions** → pilih (competitor test), lalu build; khusus **redesign** ada workflow **4 langkah** | Landing/marketing/portfolio desain baru ATAU redesign halaman yang sudah ada |
| 2 | `frontend-design` | [anthropics/skills](https://github.com/anthropics/skills) | ±1.1M | Standar build UI baru dengan identitas non-templated (bukan default bawaan model) | Membangun UI/komponen baru dari nol |
| 3 | `web-design-guidelines` | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | ±824K | Audit/review UI terhadap **Web Interface Guidelines** (guideline terbaru selalu di-fetch live dari vercel-labs) | Saat minta "review my UI", cek a11y, audit desain, atau gate sebelum selesai |
| 4 | `ui-ux-pro-max` | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | ±434K | Basis data pola: 79 styles, 192 palettes + reasoning, 74 font pairings, 119 UX guidelines, 22 stacks, 25 chart types; aktif search lokal | Antarmuka kompleks (dashboard/admin/interaksi), pemilihan stack-specific UI, eksplorasi style/palette |
| 5 | `emil-design-eng` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | ±417K | Filosofi polish, keputusan animasi, invisible details — praktik desain-eng Emil Kowalski | Layer motion/mikrointeraksi, detail polish akhir |

Install ditandai di `skills-lock.json` (v1 lockfile, computedHash per skill). Skill #1 & #2 tersedia sejak sebelum tanggal ini; #3–#5 diinstall 2026-11-05.

## Dua patokan angka di dalam taste-skill v2

- **Workflow redesign = 4 langkah** ("Redesign, restyle or review"):
  1. Record the before — inspect halaman berjalan ke `.taste-skill/before`
  2. Review & keputusan — critique screenshot; pilih restyle (type/colour/states saja) atau redesign penuh
  3. Urutan kerja dampak-terbesar — type → colour → frame/margins → states → ganti pola stock
  4. Prove it — inspect `.taste-skill/after`, bandingkan tiap lebar, klik semua yang tadinya jalan
- **Style = 3 directions** — `draw.mjs --options 3` deals tiga arah; pilih yang membawa ide spesifik subjek (lolos competitor test), bukan yang paling akrab; semua redraw harus punya alasan.

## Yang dipertimbangkan lalu di-skip (audit trail)

- `design-mobile-apps` (designed-by-ai/skills, ±1.2M, peringkat #10) — isinya wrapper REST API [Sleek.design](https://sleek.design) untuk mockup mobile, butuh `SLEEK_API_KEY` → tidak cocok sebagai patokan web frontend
- `redesign-existing-projects` (entry skills.sh leonxlnx) — bukan SKILL terpisah di repo; isinya bagian "Special cases" SKILL v2 #1 → sudah tercakup
- `impeccable` (pbakaus, trio polish/critique/distill), `vercel-composition-patterns`, `sleek-design-mobile-apps` — cadangan bila patokan utama terbukti tidak lolos pemakaian

## Cara memperbarui patokan

1. Cek ulang leaderboard/topic di skills.sh (per kuartal cukup)
2. Kandidat baru harus punya repo jelas, tanpa API key, dan relevan web
3. `npx skills add <owner/repo> -s <skill> -a opencode -y`; update tabel ini + routing pstack + `skills-lock.json`
4. Swap keluar: `npx skills remove <skill>` lalu tulis alasan di bagian skip di atas
