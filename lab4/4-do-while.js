const sum = (...args) => {
  let total = 0;
  let i = 0;
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  return total;
};
console.log(sum(10, 20, 30));
