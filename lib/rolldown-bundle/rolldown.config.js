import { defineConfig } from "rolldown";

export default defineConfig({
    input: "src/index.ts",
    output: {
        format: "esm",
        dir: "lib/esm/",
    },
    external: ["es-toolkit"],
});