import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import { board } from "./utils/board.js";
let playerName;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const rainbow = chalkAnimation.rainbow("Welcome to Tic-Tac-Toe"); // Animation starts
await intro();
await setName();

async function intro() {
  await sleep(500);
  rainbow.stop();

  console.log(`
${chalk.bgBlue("How to play?")}
 Keep in mind your sign is ${chalk.cyanBright("O")}
 and my sign is ${chalk.magentaBright("X")} if you
 lose you'll get ${chalk.bgRed("killed")}.
`);
  await sleep(750);

  console.log(`${chalk.bgHex("#d43e02")("hold")} on ...`);
  await sleep(400);
  console.log(`
${await board({
  a: "1",
  b: "2",
  c: "3",
  d: "4",
  e: "5",
  f: "6",
  g: "7",
  h: "8",
  i: "9",
})}
☠️ keep these positions in ${chalk.bgMagenta.bold("mind")} ☠️
`);
}

async function setName() {
  const input = await inquirer.prompt({
    name: "player_name",
    message: "what's your name",
  });

  playerName = input.player_name;
}

console.log(`Hello ${playerName}`);

async function main() {}
