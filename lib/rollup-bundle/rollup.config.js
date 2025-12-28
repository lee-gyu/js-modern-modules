import { defineConfig } from "rollup";
import { visualizer } from "rollup-plugin-visualizer";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
    plugins: [
        typescript(),
        nodeResolve(),
        visualizer({
            emitFile: "./lib/stats.html"
        })
    ],
    input: "src/index.ts",
    output: {
        format: "esm",
        dir: "lib/esm/",
    },
    external: ["es-toolkit"],
});