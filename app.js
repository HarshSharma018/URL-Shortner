const fs = require("fs");

const command = process.argv[2];
const file = process.argv[3];

if (command === "count") {
    const data = fs.readFileSync(file, "utf8");

    const lines = data.split("\n").length;

    console.log(`There are ${lines} lines in ${file}`);
}

//by running node app.js count notes.txt