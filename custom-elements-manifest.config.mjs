import { customElementJetBrainsPlugin } from "custom-element-jet-brains-integration";

export default {
  glow: true,
  typescript: true,
  exclude: ["node_modules", "dist"],
  litelement: true,
  dependencies: true,
  packagejson: true,
  plugins: [customElementJetBrainsPlugin()],
};
