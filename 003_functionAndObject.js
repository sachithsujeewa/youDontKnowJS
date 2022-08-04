function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const sachith = new Human('Sachith', 'Sujeewa');
const ragnar = Human('Ragnar', 'Johanson');

console.log(sachith);
console.log(ragnar);


// A: Human {firstName: "Sachith", lastName: "Sujeewa"} and undefined
// B: Human {firstName: "Sachith", lastName: "Sujeewa"} and Human {firstName: "Ragnar", lastName: "Johanson"}
// C: Human {firstName: "Sachith", lastName: "Sujeewa"} and {}
// D: Human {firstName: "Sachith", lastName: "Sujeewa"} and ReferenceError