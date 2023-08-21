import path from "path";
import typescript from "@rollup/plugin-typescript";
import { name } from "./package.json";

module.exports = {
  build: {
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: name,
    },
    rollupOptions: {
      plugins: [typescript()],
    },
  },
};
