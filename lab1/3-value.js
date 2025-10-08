const inc = (num) => {
    num.n = num.n + 2;
};

const obj = { n: 9 };
inc(obj);
console.dir(obj);