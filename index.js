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