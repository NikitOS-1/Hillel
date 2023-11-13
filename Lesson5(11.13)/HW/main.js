// task - 1
// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.

// function getLengthArr() {
//   let arrayLength = Number(prompt("Enter an array of the length you want"));
//   if (isNaN(arrayLength)) {
//     alert("You only need to write the Number, Please!");
//     return getLengthArr();
//   } else if (
//     arrayLength === 0 ||
//     arrayLength === false ||
//     arrayLength === null
//   ) {
//     alert("Okey, Bye bye!");
//     return null;
//   }
//   return arrayLength;
// }

// function addDataToArray(length) {
//   let arr = [];
//   for (let i = 0; i <= length - 1; i++) {
//     let getItem = prompt("Enter the element you want to add to the array");
//     arr.push(getItem);
//   }
//   return arr;
// }

// function arrChanges(arr) {
//   let choise = Number(
//     prompt(
//       "How do you want to modify this array? Choose your option Please\n enter - 1) Sort\n enter - 2) Remove elements from array 2 to 4\n ----and then I show this date on this page"
//     )
//   );
//   if (isNaN(choise)) {
//     alert("You only need to write the Number, Please!");
//     return arrChanges(arr);
//   } else if (choise === 0 || choise === false || choise === null) {
//     alert("Okey, Bye bye!");
//     return null;
//   }

//   if (choise === 1) {
//     return arr.sort((a, b) => a - b);
//   }
//   if (choise === 2) {
//     if (arr.length <= 4) {
//       alert(
//         "The length of your array is less than 4 \n Choise another option!"
//       );
//       return arrChanges(arr);
//     }
//     let removedElemOnArr = arr.splice(2, 4);
//     return removedElemOnArr;
//   }
// }

// function app() {
//   alert(
//     "I can help you create an array and make some changes to it and then display your data on the page!"
//   );
//   const arrLength = getLengthArr();
//   if (arrLength === null) return;

//   const arrData = addDataToArray(arrLength);
//   if (arrData === null) return;

//   alert(`Length your Array = ${arrLength} \n Your Data = [${arrData.join()}]`);
//   let beforeArr = arrData.join();

//   const arrChange = arrChanges(arrData);
//   if (arrChange === null) {
//     return;
//   } else {
//     document.write(`Your Data before change = [${beforeArr}]`);
//     document.write(`---------`);
//     document.write(`Your Data after changed = [${arrChange.join()}]`);
//   }
// }

// app();

// task - 2

// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, остальні обнулити.

let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

console.log(arr);
console.log(arr.length);
