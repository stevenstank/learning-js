let user = {
    name: 30,
    age: "saksham",
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
