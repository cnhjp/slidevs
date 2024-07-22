import fs from "node:fs";

const inputFile = new URL("../vercel.json", import.meta.url);
const outputFile = new URL("../index/src/index.html", import.meta.url);

// Read the input file
fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);
  const redirects = jsonData.redirects || [];

  // Categorize redirects by description
  const projects = {};
  redirects
    .filter((item) => item.type)
    .forEach((item) => {
      const { description, type, destination } = item;
      if (!projects[description]) {
        projects[description] = {};
      }
      projects[description][type] = { destination };
    });

  // Convert data to HTML format using a table
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Index</title>
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th,
      td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <table>
        <tr>
          <th>Project</th>
          <th>PDF</th>
          <th>Code</th>
          <th>PPT</th>
        </tr>
        ${Object.entries(projects)
          .map(
            ([description, types]) => `
          <tr>
            <td>${description}</td>
            <td><a href="${types.pdf?.destination}">${types.pdf?.destination}</a></td>
            <td><a href="${types.code?.destination}">${types.code?.destination}</a></td>
            <td><a href="${types.ppt?.destination}">${types.ppt?.destination}</a></td>
          </tr>
        `
          )
          .join("")}
      </table>
    </div>
  </body>
</html>
`;

  // Write the HTML file
  fs.writeFile(outputFile, html, "utf8", (err) => {
    if (err) {
      console.error("Error writing HTML file:", err);
    } else {
      console.log("HTML file written successfully.");
    }
  });

  // Update the vercel.json file by removing type and description fields
  redirects.forEach((item) => {
    delete item.type;
    delete item.description;
  });
  jsonData.redirects = redirects;

  // Write the updated JSON back to the file
  fs.writeFile(inputFile, JSON.stringify(jsonData, null, 2), "utf8", (err) => {
    if (err) {
      console.error("Error updating vercel.json:", err);
    } else {
      console.log("vercel.json updated successfully.");
    }
  });
});
