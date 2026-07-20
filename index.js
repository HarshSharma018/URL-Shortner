#!/usr/bin/env node

const { Command } = require("commander");

const program = new Command();

program
  .name("create-api")
  .description("Generate backend projects")
  .version("1.0.0");

program
  .command("create")
  .argument("<projectName>")
  .action((projectName) => {
    console.log(`Creating project: ${projectName}`);
  });

program.parse();



const fs = require("fs");

fs.mkdirSync(projectName);
fs.mkdirSync(`${projectName}/controllers`);
fs.mkdirSync(`${projectName}/routes`);
fs.mkdirSync(`${projectName}/middleware`);
fs.mkdirSync(`${projectName}/config`);


// run node index.js create twitter-downloader
// it will create twitter-downloader/

//controllers/
//routes/
//middleware/
//config/