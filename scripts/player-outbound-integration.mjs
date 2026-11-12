import { fileURLToPath } from "node:url";

export function playerOutboundTracking() {
  return {
    name: "player-outbound-tracking",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const { auditDist } = await import("../src/lib/player-outbound.mjs");
        const errors = await auditDist(fileURLToPath(dir));
        if (errors.length === 0) return;

        for (const error of errors.slice(0, 40)) logger.error(error);
        throw new Error(
          `${errors.length} player external link(s) rendered without player_outbound_click`
        );
      }
    }
  };
}
