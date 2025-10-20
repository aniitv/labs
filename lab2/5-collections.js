<<<<<<< HEAD
const phoneBook = [
    { name: "Marcus", phone: '+380445554433' },
    { name: 'Olena', phone: '+380679999543' },
    { name: 'Ivan', phone: '+380931112233' }
];
const findPhoneByName = (name) => {
    for (const record of phoneBook) {
        if (record.name === name) {
            return record.phone;
        }
    }
}
console.log(findPhoneByName("Olena"))



const phone_book = {
    "Marcus": "+380445554433",
    "Olena": "+380679999543",
    "Ivan": "+380931112233"
};
const findByName = (name) => {
    const phone = phone_book[name];
    return phone;
}

=======
const phoneBook = [
    { name: "Marcus", phone: '+380445554433' },
    { name: 'Olena', phone: '+380679999543' },
    { name: 'Ivan', phone: '+380931112233' }
];
const findPhoneByName = (name) => {
    for (const record of phoneBook) {
        if (record.name === name) {
            return record.phone;
        }
    }
}
console.log(findPhoneByName("Olena"))



const phone_book = {
    "Marcus": "+380445554433",
    "Olena": "+380679999543",
    "Ivan": "+380931112233"
};
const findByName = (name) => {
    const phone = phone_book[name];
    return phone;
}

>>>>>>> bebafca (Додано папку lab3)
console.log(findByName("Ivan"));