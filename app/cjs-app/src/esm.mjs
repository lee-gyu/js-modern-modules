import chalk from "chalk";
import { v4 } from "uuid";
import { createRequire } from 'module';

console.log(`[INFO] ${chalk.green(v4())}`);

// module resolve paths
console.log("chalk resolved: " + import.meta.resolve("chalk"));
console.log("uuid resolved: " + import.meta.resolve("uuid"));