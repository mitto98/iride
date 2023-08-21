import * as fs from "fs";

let result = "// DO NOT TOUCH! This file is generated automatically\n\n";
result += fs
  .readdirSync("./src")
  .filter((file) => !file.startsWith("_"))
  .filter((file) => fs.lstatSync(`./src/${file}`).isDirectory())
  .map((file) => `export {default as ${file}} from "./${file}";`)
  .join("\n");

result += '\nexport * from "./types"';
fs.writeFileSync("./src/index.ts", result);
