#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import { board } from "./utils/board.js";
let playerName;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

console.clear();
const rainbow = chalkAnimation.rainbow("Welcome to Tic-Tac-Toe"); // Animation starts
await intro();
await main();

async function intro() {
  await sleep(1000);
  rainbow.stop();

  console.log(`
${chalk.bgBlue("How to play?")}
 Keep in mind your sign is ${chalk.cyan.bold("O")}
 and my sign is ${chalk.green.bold("X")} if you
 lose you'll get ${chalk.bgRed("killed")}.
`);
  await sleep(800);
  await setName();

  console.log(`${chalk.bgHex("#d43e02")("hold")} on ...`);
  await sleep(800);
  console.log(`
${await board({
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
})}
just add ${chalk.bgHex("#5d5100")("one-number")} as your input..
`);
  await sleep(1000);
}
async function setName() {
  const input = await inquirer.prompt({
    name: "player_name",
    message: "what's your name",
  });

  playerName = input.player_name;
}
async function main() {
  const inputHash = {};

  let toggle = true;
  while (toggle) {
    let cpuInput = Math.floor(Math.random() * 9) + 1;

    while (cpuInput in inputHash) {
      cpuInput = Math.floor(Math.random() * 9) + 1;
    }

    console.log(`🔹 ${chalk.bgGreen.black(" My turn ")}`);
    inputHash[cpuInput] = chalk.green("X");

    await sleep(700);
    console.log(`${await board(inputHash)}`);
    await sleep(700);

    let user = await inquirer.prompt({
      name: "input",
      message: `🔹 ${chalk.bgCyan(" Your turn ")} -> `,
    });

    while (user.input in inputHash) {
      user = await inquirer.prompt({
        name: "input",
        message: `🔹 ${chalk.bgCyan(" Your turn ")} -> `,
      });
    }
    inputHash[user.input] = chalk.cyanBright("O");

    await sleep(700);
    console.log(`${await board(inputHash)}`);

    toggle = checkResult(inputHash);
  }
}
function checkResult(inputHash) {
  const o = "\x1B[96mO\x1B[39m";
  const x = "\x1B[32mX\x1B[39m";
  if (
    inputHash[1] &&
    inputHash[1] == inputHash[2] &&
    inputHash[1] == inputHash[3]
  ) {
    if (inputHash[1] == x) {
      console.log(chalk.bgRed("I Won"));
    } else {
      console.log(chalk.yellow("You Won"));
    }
    return false;
  }
  if (
    inputHash[1] &&
    inputHash[1] == inputHash[4] &&
    inputHash[1] == inputHash[7]
  ) {
    if (inputHash[1] == x) {
      console.log(chalk.bgRed("I Won"));
    } else {
      console.log(chalk.yellow("You Won"));
    }
    return false;
  }
  if (
    inputHash[3] &&
    inputHash[3] == inputHash[6] &&
    inputHash[3] == inputHash[9]
  ) {
    if (inputHash[3] == x) {
      console.log(chalk.bgRed("I Won"));
    } else {
      console.log(chalk.yellow("You Won"));
    }
    return false;
  }
  if (
    inputHash[7] &&
    inputHash[7] == inputHash[8] &&
    inputHash[7] == inputHash[9]
  ) {
    if (inputHash[7] == x) {
      console.log(chalk.bgRed("I Won"));
    } else {
      console.log(chalk.yellow(`${playerName} You Won`));
    }
    return false;
  }
  if (
    inputHash[4] &&
    inputHash[4] == inputHash[5] &&
    inputHash[4] == inputHash[6]
  ) {
    if (inputHash[4] == x) {
      console.log(chalk.bgRed("I Won"));
    } else {
      console.log(chalk.yellow(`${playerName} You Won`));
    }
    return false;
  }
  if (
    inputHash[1] &&
    inputHash[1] == inputHash[5] &&
    inputHash[1] == inputHash[9]
  ) {
    if (inputHash[1] == x) {
      console.log(chalk.bgRed("I Won"));
    } else {
      console.log(chalk.yellow(`${playerName} You Won`));
    }
    return false;
  }
  if (
    inputHash[3] &&
    inputHash[3] == inputHash[5] &&
    inputHash[3] == inputHash[7]
  ) {
    if (inputHash[3] == x) {
      console.log(chalk.bgRed("I Won"));
    } else {
      console.log(chalk.yellow(`${playerName} You Won`));
    }
    return false;
  }

  if (
    inputHash[1] &&
    inputHash[2] &&
    inputHash[3] &&
    inputHash[4] &&
    inputHash[5] &&
    inputHash[6] &&
    inputHash[7] &&
    inputHash[8] &&
    inputHash[9]
  ) {
    console.log(chalk.bgMagentaBright(`GAME DRAW`));
    return false;
  }
  return true;
}
