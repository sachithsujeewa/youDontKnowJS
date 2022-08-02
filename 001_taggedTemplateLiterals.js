function printMyData(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
}

const firstName = 'Sachith';
const age = 29;

printMyData`${firstName} is ${age} years old`;