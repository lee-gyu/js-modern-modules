import { build } from "esbuild";

function buildSrc(format) {
    return build({
        outdir: `lib/${format}/`,
        target: ["es2022"],
        format: format,
        entryPoints: ["src/index.ts"],
        bundle: true,
        external: ["es-toolkit"],
    })
        .then((result) => {
            console.log("Build succeeded:", result);
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
}

buildSrc("cjs");
buildSrc("esm");