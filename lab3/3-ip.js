<<<<<<< HEAD

const ipToInt = (ip = '127.0.0.1') => {
    return ip
        .split('.')
        .map(Number)
        .reduce((acc, val) =>
            (acc << 8) + val, 0);
};

console.log(ipToInt('127.0.0.1'));  
=======

const ipToInt = (ip = '127.0.0.1') => {
    return ip
        .split('.')
        .map(Number)
        .reduce((acc, val) =>
            (acc << 8) + val, 0);
};

console.log(ipToInt('127.0.0.1'));  
>>>>>>> 90a40211909d75e6ec83ef821dfaef3fca795b0a
