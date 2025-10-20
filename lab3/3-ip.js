
const ipToInt = (ip = '127.0.0.1') => {
    return ip
        .split('.')
        .map(Number)
        .reduce((acc, val) =>
            (acc << 8) + val, 0);
};

console.log(ipToInt('127.0.0.1'));  
