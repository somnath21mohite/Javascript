

const productJSON = `{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 120
    }
}
`;
console.log(productJSON);
console.log(typeof productJSON);
const product = JSON.parse(productJSON);
console.log(`After Conversion from JSON String to Object`);
console.log(typeof product);
console.log(product);


console.log(product.price);
console.log(product.title);

console.log(`===============================`);
let developer = {
    firstName: "Gajanan",
    age: 32,
    isMarried: true,
    skills: ["C", "CPP", "Core Java", "JavaScript", "Microservices" ]
}

const jsonStrDeveloper = JSON.stringify(developer);
console.log(typeof jsonStrDeveloper);
console.log(jsonStrDeveloper);