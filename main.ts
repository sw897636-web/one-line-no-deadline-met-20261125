// One Line, No Deadline Met
// Writes a single one-line joke excusing a missed deadline (<=200 chars)
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I missed the deadline because it ghosted our meeting first — I just returned the favour.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
