#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDirectory = path.join(process.cwd(), "posts");
const dbPath = path.join(process.cwd(), "data/blog/blog.json");

const main = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = path.basename(fileName, path.extname(fileName));

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      category: "post",
      url: "/writing/" + id,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

fs.writeFile(dbPath, JSON.stringify(main()), function (err) {
  if (err) throw err;

  console.log(main().length + " entries saved to blog.json");
});
