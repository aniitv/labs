function fn() {
    const obj1 = { name: "Nastia" };
    let obj2 = { name: "Maya" };

    obj1.name = "Anna";
    obj2.name = "Mariia";

    // obj1 = { name: Sofia }
    obj2 = { name: "Anastasiia" };

    console.log(obj1);
    console.log(obj2);
}
fn()

const createUser = (name, city) => ({ name, city });
console.log(createUser('Marcus Aurelius', 'Roma'));