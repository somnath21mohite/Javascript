

console.log("<======================= STEP 1 =========================>");
class Vehicle {
    constructor(company,model,year,color,millage){
        this.company = company;
        this.model = model;
        this.year = year;
        this.color = color;
        this.millage = millage;
    }
    arrayOfVehicles(){
            console.log(`Company:${ this.company}, Model:${this.model}, Year:${this.year}, Color:${ this.color}, Millage:${this.millage}`);
        }
   
}
const toyota = new Vehicle("Toyota", "Fortuner", 2023, "White", "8kmpl.");
toyota.arrayOfVehicles();
const tata = new Vehicle("TATA","Harrier",2022,"Balck","15-17kmpl.");
tata.arrayOfVehicles();
const tata_1 = new Vehicle("TATA","Nexon",2022,"Balck","15-17kmpl.");
tata_1.arrayOfVehicles();
const maruti = new Vehicle("Maruti Suzuki","Wagon r","2020","White","34km/kg.");
maruti.arrayOfVehicles();
const Ford = new Vehicle("Ford","Endeavour",2023,"Balck","06kmpl.");
tata.arrayOfVehicles();


console.log("<======================= STEP 2 =========================>");
class Collage{
    constructor(name,courses,fees,location){
        this.name = name;
        this.courses = courses;
        this.fees = fees;
        this.location = location;
            }
         display(){
                console.log(`Name:${this.name}, Courses:${this.courses}, Fees:${this.fees}, Location:${this.location}`);
            }
}
const Collage_01 = new Collage("BVIT","IT Engineering","1 lakh","Kharghar.");
Collage_01.display();
const Collage_02 = new Collage("Sarwasti Collage","Mechanical Engineering","1.5 lakh","Belapur.");
Collage_02.display();
const Collage_03 = new Collage("D.Y.Patil","Dental","2 lakh","Nerul.");
Collage_03.display();
const Collage_04 = new Collage("J.D.Pol","MBBS","10 lakh","Kharghar.");
Collage_04.display();

console.log("<======================= STEP 3 =========================>");

function traverseObject(obj){
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(`${key}:-${element}`);
            
        }
    }
}
traverseObject(Collage_01);
console.log("-----------------------------------");
traverseObject(Collage_02);
console.log("-----------------------------------")
traverseObject(Collage_03);
console.log("-----------------------------------")
traverseObject(Collage_04);
console.log("-----------------------------------")
