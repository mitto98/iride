import path from "path";
import typescript from "@rollup/plugin-typescript";
import { name } from "./package.json";

module.exports = {
  build: {
    sourcemap: true,
    emptyOutDir: false,
    // Reduce bloat from legacy polyfills.
    target: "esnext",
    // Leave minification up to applications.
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: name,
    },
    rollupOptions: {
      plugins: [
        typescript({
          rootDir: path.resolve(__dirname, "src"),
          declaration: true,
          declarationDir: path.resolve(__dirname, "dist"),
        }),
      ],
    },
  },
};
