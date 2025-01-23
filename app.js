
const groceryList = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

console.log(`\n<<<<<<<<<<[ Printing using forEach ]>>>>>>>>>>>>>>>\n`);//✅

const logNames = (singleItem) => {
  console.log(singleItem.name);
};

groceryList.forEach(logNames);



console.log(`\n<<<<<<<<<<<<<<<<<<[ UPPERCASE ]>>>>>>>>>>>>>>>>>>>>>\n`);//✅

const getUpperCaseNames = (itemNames) => {
  console.log(itemNames.name.toUpperCase());
};

groceryList.map(getUpperCaseNames);



console.log(`\n<<<<<<<<<<<<<<<<<<[ GET ITEMS BY ID ]>>>>>>>>>>>>>>>>>>>>>\n`);//✅

const getItemById = (itemFindBy) => {
  console.log(itemFindBy.id); 
};

groceryList.find(getItemById);



console.log(`\n<<<<<<<<<<<<<<<<<<[ GET ITEMS BY CATEGORY ]>>>>>>>>>>>>>>>>>>>>>\n`);//✅

const getItemsByCategory = (filterItemBy) => {
  console.log(filterItemBy.category);
};
groceryList.filter(getItemsByCategory);



console.log(`\n<<<<<<<<<<<<<<<<<<[ COUNT ITEM TOTAL QUANTITY ]>>>>>>>>>>>>>>>>>>>>>\n`);//✅

  groceryList.reduce((accumulation, value) => {
  
  const totalQuantity = accumulation + value.quantity;
  console.log(`Total : ${totalQuantity}`);
  return totalQuantity;

},0);



console.log(`\n<<<<<<<<<<<<<<<<<<[ CALCULATE TOTAL PRICE ]>>>>>>>>>>>>>>>>>>>>>\n`);//✅

groceryList.reduce((accumulation, value) => {
  
  const totalPrices = accumulation + value.price;
  console.log(`Total Price : ${totalPrices}`);
  return  totalPrices;

},0);