type Bar = number & any;

// @ts-ignore
const num1: Bar = 'hello';
// @ts-expect-error
const num2: Bar = 'hello';