function Person(fName, lName, birthYear) {
  //property
  this.fName = fName;
  this.lName = lName;
  this.birthYear = birthYear;

  //method
  this.calcAge = function () {
    return 2023 - this.birthYear;
  };
}

const personNikita = new Person("nikita", "nik", 1993);

// prototype - глобально ссылается на прототип
// __proto__ - ссылается на прототип экземпляра
