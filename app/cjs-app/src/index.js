const { } = require("@repo/cjs-module");
const { v4 } = require("uuid");
const chalk = require("chalk");

console.log("chalk resolved: " + require.resolve("chalk"));
console.log("chalk resolved: " + require.resolve("chalk"));
console.log("chalk resolved paths: ", require.resolve.paths("chalk"));
console.log("uuid resolved: " + require.resolve("uuid"));
console.log(v4());

console.log(`[INFO] ${chalk.default.green(v4())}`);

console.log(require.cache);