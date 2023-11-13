// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.

function getLengthArr() {
  let arrayLength = Number(prompt("Enter an array of the length you want"));
  if (isNaN(arrayLength)) {
    alert("You only need to write the Number, Please!");
    return getLengthArr();
  } else if (
    arrayLength === 0 ||
    arrayLength === false ||
    arrayLength === null
  ) {
    alert("Okey, Bye bye!");
    return null;
  }
  return arrayLength;
}

function addDataToArray(length) {
  let arr = [];
  for (let i = 0; i <= length - 1; i++) {
    let getItem = prompt("Enter the element you want to add to the array");
    arr.push(getItem);
  }
  return arr;
}

function arrChanges(arr) {
  let choise = Number(
    prompt(
      "How do you want to modify this array? Choose your option Please\n enter - 1) Sort\n enter - 2) Remove elements from array 2 to 4\n enter - 3) Cancel \n ----and then I show this date on this page"
    )
  );
  if (isNaN(choise)) {
    alert("You only need to write the Number, Please!");
    return arrChanges(arr);
  } else if (choise === 0 || choise === false || choise === null) {
    alert("Okey, Bye bye!");
    return null;
  }

  if (choise === 1) {
    return arr.sort((a, b) => a - b);
  }
}

function app() {
  alert(
    "I can help you create an array and make some changes to it and then display your data on the page!"
  );
  const arrLength = getLengthArr();
  if (arrLength === null) return;

  const arrData = addDataToArray(arrLength);
  if (arrData === null) return;

  alert(`Length your Array = ${arrLength} \n Your Data = [${arrData.join()}]`);

  const arrChange = arrChanges(arrData);
  if (arrChange === null) return;

  document.write(arrChange.join());
}

app();
