import fs from "node:fs/promises";
import { dirname, resolve } from "node:path";
import process from "node:process";
import fg from "fast-glob";

const packageFiles = (
  await fg("*/src/package.json", {
    onlyFiles: true,
  })
).sort();

const bases = (
  await Promise.all(
    packageFiles.map(async (file) => {
      const root = dirname(dirname(file));
      const json = JSON.parse(await fs.readFile(file, "utf-8"));
      const pdfFile = (
        await fg("*.pdf", {
          cwd: resolve(process.cwd(), root),
          onlyFiles: true,
        })
      )[0];

      const command = json.scripts?.build;

      if (!command) return;

      const base = command.match(/ --base (.*?)\s/)?.[1];

      if (!base) return;

      return {
        description: json.description,
        dir: root,
        base,
        pdfFile,
      };
    })
  )
).filter(Boolean);

interface RedirectItem {
  type?: "ppt" | "pdf" | "code";
  description?: string;
  source: string;
  destination: string;
  statusCode: number;
}

const redirects = bases.flatMap(({ base, pdfFile, dir, description }) => {
  const parts: RedirectItem[] = [];

  if (pdfFile) {
    parts.push({
      description,
      source: `${base}pdf`,
      destination: `https://github.com/cnhjp/slidevs/blob/main/${dir}/${pdfFile}?raw=true`,
      statusCode: 302,
    });

    parts.push({
      type: "pdf",
      description,
      source: `/${dir}/pdf`,
      destination: `https://github.com/cnhjp/slidevs/blob/main/${dir}/${pdfFile}?raw=true`,
      statusCode: 302,
    });
  }

  parts.push({
    type: "code",
    description,
    source: `${base}src`,
    destination: `https://github.com/cnhjp/slidevs/tree/main/${dir}`,
    statusCode: 302,
  });

  parts.push({
    description,
    source: `${dir}`,
    destination: `${base}`,
    statusCode: 301,
  });

  parts.push({
    type: "ppt",
    description,
    source: `${base}(.*)`,
    destination: `${base}index.html`,
    statusCode: 200,
  });

  return parts;
});

const content = {
  github: {
    enabled: false,
  },
  buildCommand: "pnpm run build",
  outputDirectory: "dist",
  redirects: [
    ...redirects,
    ...[
      {
        source: "/",
        destination: "/index.html",
        statusCode: 302,
      },
    ],
  ],
};

await fs.writeFile("vercel.json", JSON.stringify(content, null, 2), "utf-8");
