function getRandomElement<T>(array: Array<T>): T | undefined {
  return array[Math.floor(Math.random() * array.length)];
}

export default getRandomElement;
