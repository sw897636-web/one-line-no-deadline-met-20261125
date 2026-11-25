// One Line, No Deadline Met
// Writes a single one-line joke excusing a missed deadline (<=200 chars)
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Quick update on the deadline: the deck is fully done, up to and including the slide that says \"Agenda.\"";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
