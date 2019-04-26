import { testAllURLS, allTrue } from './lib/utils';
import { printEpilog, printProlog } from './lib/prints';

async function main() {
  const urls = [
    'https://facebook.com',
    'https://twitter.com',
    'https://reddit2.com',
  ];

  printProlog();

  const allAlive = allTrue(await testAllURLS(urls));

  printEpilog(allAlive);
}

main().catch(console.error);
