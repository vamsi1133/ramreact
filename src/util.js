export const randomGenerator = (start = 0, end = 9) => {
  const random = Math.floor(Math.random() * 10);
  if (random >= start && random <= end) {
    return random;
  }
  return randomGenerator(start, end);
};
