let user = {
    name: 30,
    age: "aryan",
    "likes birds": true,
}

console.log(user.name)
console.log(user.age)
console.log(user["likes birds"])

// computed properties

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5,
};

alert( bag.apple )
