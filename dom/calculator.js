
console.log("******************** STEP 1 **********************");
const submitButton = document.querySelector('#addition');
const fieldOne = document.querySelector('#field-one');
const fieldTwo = document.querySelector('#field-two');

const resultValue = document.querySelector('#resultValue');

submitButton.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne + valueTwo;
    console.log(valueOne + valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;
} );

console.log("******************** STEP 2 **********************");
const submitButton_1 = document.querySelector('#subtraction');
 submitButton_1.addEventListener('click',() => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result_1 = valueOne - valueTwo;
    console.log(valueOne - valueTwo);
    resultValue.innerHTML = result_1;
 });

 console.log("******************** STEP 3 **********************");
 const submitButton_2 = document.querySelector('#multiplication');
 submitButton_2.addEventListener('click',() => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result_2 = valueOne*valueTwo;
    console.log(result_2);
    resultValue.innerHTML = result_2 ;
 });

 console.log("******************** STEP 4 **********************");
 const submitButton_3 = document.querySelector('#divide');
 submitButton_3.addEventListener('click',() => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result_3 = valueOne/valueTwo;
    console.log(result_3);
    resultValue.innerHTML = result_3;
 })