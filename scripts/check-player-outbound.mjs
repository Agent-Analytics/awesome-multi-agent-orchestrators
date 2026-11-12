import path from "node:path";
import { fileURLToPath } from "node:url";
import { auditDist } from "../src/lib/player-outbound.mjs";

const distDir = path.resolve(process.argv[2] ?? fileURLToPath(new URL("../dist", import.meta.url)));
const errors = await auditDist(distDir);

if (errors.length > 0) {
  console.error(`player_outbound_click audit failed (${errors.length} problem${errors.length === 1 ? "" : "s"}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("player_outbound_click audit passed");
