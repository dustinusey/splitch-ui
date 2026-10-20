import readline from "node:readline";

/**
 * Minimal arrow-key select (no dependencies, no free text).
 * Up/Down or j/k to move, 1-9 to jump, Enter to choose, Ctrl+C to abort.
 */
export function select({ message, choices, initial = 0, render = (c) => c }) {
  const { stdin, stdout } = process;
  if (!stdin.isTTY) {
    return Promise.reject(new Error("Interactive prompt needs a TTY. Pass --color <name> instead."));
  }
  return new Promise((resolve, reject) => {
    let index = initial;
    let drawn = 0;
    readline.emitKeypressEvents(stdin);
    stdin.setRawMode(true);
    stdin.resume();
    stdout.write("\x1b[?25l");

    const draw = () => {
      if (drawn) stdout.write(`\x1b[${drawn}A`);
      const lines = [`\x1b[1m? ${message}\x1b[0m \x1b[2m(↑/↓, enter)\x1b[0m`];
      choices.forEach((c, i) => {
        const active = i === index;
        lines.push(`${active ? "\x1b[36m❯\x1b[0m" : " "} ${render(c, active)}`);
      });
      stdout.write(lines.map((l) => `\x1b[2K${l}`).join("\n") + "\n");
      drawn = lines.length;
    };

    const cleanup = () => {
      stdin.off("keypress", onKey);
      stdin.setRawMode(false);
      stdin.pause();
      stdout.write("\x1b[?25h");
    };

    const onKey = (str, key = {}) => {
      if (key.ctrl && key.name === "c") {
        cleanup();
        reject(new Error("Aborted."));
        return;
      }
      if (key.name === "up" || key.name === "k") index = (index - 1 + choices.length) % choices.length;
      else if (key.name === "down" || key.name === "j" || key.name === "tab") index = (index + 1) % choices.length;
      else if (/^[1-9]$/.test(str ?? "") && Number(str) <= choices.length) index = Number(str) - 1;
      else if (key.name === "return" || key.name === "enter") {
        cleanup();
        stdout.write(`\x1b[${drawn}A\x1b[0J\x1b[1m✔ ${message}\x1b[0m ${render(choices[index], false)}\n`);
        resolve(choices[index]);
        return;
      }
      draw();
    };

    stdin.on("keypress", onKey);
    draw();
  });
}
