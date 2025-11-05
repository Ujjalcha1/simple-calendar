import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: false,
  clean: true,
  minify: true,
  external: ["react", "react-dom"],
  injectStyle: true,
});
