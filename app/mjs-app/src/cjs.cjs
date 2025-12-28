const { v4 } = require("uuid");
const chalk = require("chalk");

console.log(v4());

console.log(`[INFO] ${chalk.green(v4())}`);