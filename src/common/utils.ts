export const shuffleArray = <T>(arr: T[]) => {
  const res = [...arr];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [arr[j], arr[i]];
  }
  return res;
};
