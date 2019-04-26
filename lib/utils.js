import { isPageAlive } from './http';
import { printStatus } from './prints';

export function allTrue(collection) {
  return collection.every(item => item === true);
}

export async function testURL(url) {
  const isAlive = await isPageAlive(url);
  printStatus(url, isAlive);

  return isAlive;
}

export async function testAllURLS(urls) {
  return Promise.all(urls.map(testURL));
}
