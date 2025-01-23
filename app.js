// console.log("TESTING");

// 1)Create a project called grocery-list ✅
// 2)Create an array called groceryList✅

const groceryList = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

//3)Create the following functions
//logNames => Takes in an array of items and console.logs the name of each item in the given array. Hint: use .forEach✅

const logNames =(singleItem) =>{
console.log(singleItem.name)
}
 groceryList.forEach((logNames));

//groceryList.forEach((item) => {console.log(item.name)}); //anonymous function

