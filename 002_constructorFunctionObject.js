function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new User('Sachith', 'Sujeewa');
User.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

// 1: TypeError
// 2: SyntaxError
// 3: Sachith Sujeewa
// 4: undefined undefined