let user = {
    name: 18,
    age: "aryan",
    "likes bird": true,
}

console.log(user.name)
console.log(user.age)
console.log(user["likes bird"])

// computed properties

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5,
};

alert( bag.apple )


let data = 42;
let dataCopy = data;

dataCopy = 43;
console.log(data);
console.log(dataCopy);
