import { commandHandler } from "./rover";
import * as coord from "./coordinate";
import { myPlateau } from "./plateau";
import * as readline from "readline";
//import * as promptSync from "prompt-sync";  // for console input

console.log(`Plateau's dimension: x = ${myPlateau.x} y = ${myPlateau.y}`);
const c = coord.getCoordinate();
console.log(
  `The rover starting coordinate: x = ${c.x} y = ${c.y} orientation = ${c.o}`
);

function replDemo() {
  return new Promise(function (resolve, reject) {
    let rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt("enter a command for Rover: ");
    rl.prompt();
    rl.on("line", function (line) {
      if (line === "exit" || line === "quit" || line == "q") {
        rl.close();
        return; // exit
      }

      if (line === "help" || line === "?") {
        console.log(`permitted command a combination of: L|R|M\n`);
      } else {
        console.log(commandHandler(line));
      }
      rl.prompt();
    }).on("close", function () {
      console.log("bye");
      resolve(42); // this is the final result of the function
    });
  });
}

async function run() {
  try {
    let replResult = await replDemo();
    console.log("repl result:", replResult);
  } catch (e) {
    console.log("failed:", e);
  }
}

run();

/*
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entr a command for Rover or q for quit : ", (inst) => {
  if (inst !== "q") {
    let coord = commandHandler(inst);
    console.log(
      `new coordinate x : ${coord.x} y : ${coord.y} orientation : ${coord.o}`
    );
    rl.close();
  }
});
*/
