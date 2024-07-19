const fs = require("fs-extra");

async function main() {
  await fs.ensureDir("../../dist");
  await fs.copy("./index.html", "../../dist/index.html");
}

main().catch(console.error);
