function getRandomNumber(length: number): number {
  return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
}

export default getRandomNumber;
