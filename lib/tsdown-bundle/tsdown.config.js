import { defineConfig } from "tsdown";

export default defineConfig([
    {
        entry: "src/index.ts",
        platform: "node",
        outDir: "lib/esm/",
        dts: true,
        external: ["es-toolkit"],
    }
]);