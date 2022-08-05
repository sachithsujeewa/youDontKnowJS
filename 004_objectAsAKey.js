const sachith = {};
const sujeewa = { key: 'sujeewa' };
const jayasinghe = { key: 'jayasinghe' };

sachith[sujeewa] = 245;
sachith[jayasinghe] = 67;

console.log(sachith[sujeewa]);
// A: 245
// B: 67
// C: undefined
// D: ReferenceError