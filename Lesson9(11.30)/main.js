// --------clone object----------
// 1. Object.assign
const obj1 = { a: 1, b: 2 };

// const copyObj = Object.assign({}, obj2);

// 2.(...)spred
// 3. JSON
const copyObj = JSON.parse(JSON.stringify(obj1));
// 4. library(Lodash)