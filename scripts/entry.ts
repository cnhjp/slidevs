import fs from "node:fs";

const inputFile = new URL("../vercel.json", import.meta.url);
const outputFile = new URL("../index/src/index.html", import.meta.url);

// 读取inputFile和outputFile
fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // 将data转换为JSON对象
  const jsonData = JSON.parse(data);
  const redirects = jsonData.redirects || [];

  // 按description分类
  const projects = {};
  redirects.filter((item) => {
    return !!item.type;
  });

  redirects
    .filter((item) => {
      return !!item.type;
    })
    .forEach((item) => {
      const { description, type } = item;
      if (!projects[description]) {
        projects[description] = {};
      }
      projects[description][type] = item;
    });

  // 数据转换为HTML格式，用table表展示
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>入口</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="container">
      <table>
        <tr>
          <th>项目</th>
          <th>PDF</th>
          <th>代码</th>
          <th>PPT</th>
        </tr>
        ${Object.entries(projects).map(([description, types]) => {
          return `<tr>
              <td>${description}</td>
              <td><a href="${types.pdf.destination}">${types.pdf.destination}</a></td>
              <td><a href="${types.code.destination}">${types.code.destination}</a></td>
              <td><a href="${types.ppt.destination}">${types.ppt.destination}</a></td>
            </tr>`;
        })}
      </table>
      </div>
      </body>
      </html>`;

  fs.writeFile(outputFile, html, "utf8", (err) => {});

  // 删除vercel.json中redirects的type字段和description字段
  redirects.forEach((item) => {
    delete item.type;
    delete item.description;
  });
  jsonData.redirects = redirects;
  fs.writeFile(
    inputFile,
    JSON.stringify(jsonData, null, 2),
    "utf8",
    (err) => {}
  );
});
