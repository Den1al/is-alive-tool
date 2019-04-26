import chalk from 'chalk';

const orange = chalk.hex('#efa421').bold.underline;

function printNewLine() {
  console.log('');
}

export function printStatus(url, isAlive) {
  const msg = isAlive
    ? chalk.italic(`tested ${chalk.bold.green(url)} and it's up❕`)
    : chalk.italic(`tested ${chalk.bold.red(url)} and it's down 💤`);

  const prefix = isAlive ? ' ▪ ✅  ' : ' ▪ ❌  ';

  console.log(prefix + chalk.italic(msg));
}

export function printProlog() {
  printNewLine();
  console.log(
    chalk.white(
      ` 🔶  Testing whether we have ${orange('internet')} connection  🔶`
    )
  );
  printNewLine();
}

export function printEpilog(areAllAlive) {
  printNewLine();
  if (areAllAlive) {
    console.log(
      ` 😎  ${chalk.underline.bold.white(
        'All urls'
      )} seem to be ${chalk.bold.white('alive')}, we are good to go!`
    );
  } else {
    console.log(
      ` ☹ ️ It seems there is ${chalk.underline.bold.red(
        'kind of an issue'
      )} ...`
    );
  }
}
