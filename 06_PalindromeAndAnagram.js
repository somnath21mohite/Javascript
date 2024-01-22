


console.log("******************** STEP 1 *************************");
function isPalindrome(str) {
    const cleanedString = str.toLowerCase().replace(/\s/g, '');
    return cleanedString === cleanedString.split('').reverse().join('');
}

const inputString = "madam";
const result = isPalindrome(inputString);

if (result) {
    console.log(`${inputString} is a palindrome.`);
} else {
    console.log(`${inputString} is not a palindrome.`);
}
const inputString1 = "dad";
const result1 = isPalindrome(inputString1);

if (result1) {
    console.log(`${inputString1} is a palindrome.`);
} else {
    console.log(`${inputString1} is not a palindrome.`);
}

const inputString2 = "hello";
const result2 = isPalindrome(inputString2);

if (result2) {
    console.log(`${inputString2} is a palindrome.`);
} else {
    console.log(`${inputString2} is not a palindrome.`);
}

console.log("******************** STEP 2 *************************");

function isAnagram(str1, str2) {
    const cleanedStr1 = str1.toLowerCase().replace(/\s/g, '');
    const cleanedStr2 = str2.toLowerCase().replace(/\s/g, '');
    return cleanedStr1.split('').sort().join('') === cleanedStr2.split('').sort().join('');
}
const string1 = "Silent";
const string2 = "Listen";
const result_1 = isAnagram(string1, string2);

if (result_1) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}

const string_1 = "Hello";
const string_2 = "World";
const result_2 = isAnagram(string_1, string_2);

if (result_2) {
    console.log(`${string_1} and ${string_2} are anagrams.`);
} else {
    console.log(`${string_1} and ${string_2} are not anagrams.`);
}

const string_ = "Such";
const string4= "much";
const result_3 = isAnagram(string_, string4);

if (result_3) {
    console.log(`${string_} and ${string4} are anagrams.`);
} else {
    console.log(`${string_} and ${string4} are not anagrams.`);
}