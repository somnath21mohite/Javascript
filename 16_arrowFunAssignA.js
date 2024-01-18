console.log("<======================== STEP 1 =========================>");

const show = () => {
  console.log(`"Good Morning, Today is Thursday`);
};
show();

console.log("<======================== STEP 2 =========================>");

const multiply = (n1, n2, n3) => {
  console.log(`Multiplication is:${n1 * n2 * n3}`);
};
multiply(5, 5, 2);
multiply(10, 4, 1);

console.log("<======================== STEP 3 =========================>");

const add = (n1, n2, n3, n4, n5) => {
  return n1 + n2 + n3 + n4 + n5;
};
const result = add(100, 100, 200, 349, 756);
console.log(`Addition is: ${result}`);
const result_1 = add("I am", " learning", " ES6", " features", " in depth");
console.log(`Addition is: ${result_1}`);
