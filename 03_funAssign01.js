console.log("--------------------------- STEP 1-------------------------------");
console.log("");

function selfIntroduction(personalDetails){
    console.log(personalDetails );
}
selfIntroduction("Hello, Sir, I am Somanth Mohite, the latest addition to the tribe of engineers.I may be a fresher, but I am filled with energy, ideas, and an insatiable curiosity to learn. ")

console.log("");
console.log("--------------------------- STEP 2-------------------------------");
console.log("");

function personalDetails(firstName,lastName,collegeName){
console.log("First Name:",firstName,"       Last Name:" , lastName,"      Collage Name:",collegeName );
}

personalDetails("Somnath","Mohite","saraswati college of engineering")

console.log("");
console.log("--------------------------- STEP 3-------------------------------");
console.log("");
function swapValue(x,y){
    console.log("Before Swap", " x=", x," y=", y);
    var temp = x;
    x = y;
    y = temp;
    console.log("After Swap", " x=", x," y=", y);
}
swapValue("virat","Anushka")
swapValue(1000, 2000)

console.log("");
console.log("--------------------------- STEP 4-------------------------------");
console.log("");

function addThree(a,b,c){
    console.log("Addition is=", a+b+c);
}
addThree(10.23,600,40);

addThree("Hello","   Good","   Mornig");
