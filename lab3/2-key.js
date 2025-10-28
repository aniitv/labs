<<<<<<< HEAD
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()-_=+[]{}|;:,.<>?';

function generateKey(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

=======
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()-_=+[]{}|;:,.<>?';

function generateKey(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

>>>>>>> 90a40211909d75e6ec83ef821dfaef3fca795b0a
console.log(generateKey(10));