
const array = [3, false, '77', true, {}, 'lab', -100, null, NaN, 'night', true]

const typeCount = {};
for (const item of array) {
    const type = typeof item;
    if (!(type in typeCount)) {
        typeCount[type] = 0;
    }
    typeCount[type]++;
}
console.log(typeCount);

