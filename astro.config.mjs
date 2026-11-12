import { defineConfig } from "astro/config";
import { playerOutboundTracking } from "./scripts/player-outbound-integration.mjs";

export default defineConfig({
  site: "https://openorchestrators.org",
  output: "static",
  integrations: [playerOutboundTracking()]
});
