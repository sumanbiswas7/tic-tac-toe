import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { board } from "./utils/board.js";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const rainbow = chalkAnimation.rainbow("Welcome to Tic-Tac-Toe"); // Animation starts
await intro();

async function intro() {
  await sleep(1000);
  // board({ i: chalk.cyan("O"), b: "x", e: chalk.yellow("X") });
  // ${chalk.bgHex("#d43e02")("How to play ?")}

  rainbow.stop();
  console.log(`
${chalk.bgBlue("How to play?")}
 Keep in mind your sign is ${chalk.cyanBright("O")}
 and my sign is ${chalk.magentaBright("X")} if you
 lose you'll get ${chalk.bgRed("killed")}.
`);

  await sleep(1500);

  console.log(`${chalk.bgHex("#d43e02")("hold")} on ...`);
  await sleep(850);
  console.log(`
${await board({
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e",
  f: "f",
  g: "g",
  h: "h",
  i: "i",
})}
☠️ keep these positions in ${chalk.bgMagenta.bold("mind")} ☠️
`);
}
