// Name: Manuel Federico D. Tudayan
// Activity: Perf3: Reference Types with Arrays and Objects
// Data Structures and Algorithms

// Activity 2: ARRAY METHODS PRACTICE

// 1. Use concat() method to join two arrays together
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arrayConc = arr1.concat(arr2);
console.log(arrayConc);

console.log("\n________________\n");

// 2. Use push() method to add "Kiwi" to the end of the array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original array:", fruits);
fruits.push("Kiwi");
console.log("Pushed array:", fruits);

console.log("\n________________\n");

// 3. Use unshift() method to add 4 and 5 to the beginning of the array
let array1 = [1, 2, 3];
console.log("Original array:", array1);
array1.unshift(4, 5);
console.log("Unshifted array:", array1);

console.log("\n________________\n");

// 4. Use pop() method to remove the last element from the 'fruits' array
console.log("Original array:", fruits);
fruits.pop();
console.log("Popped array:", fruits);

console.log("\n________________\n");

// 5. Use shift() method to remove the first element from the array
let array2 = [1, 2, 3];
console.log("Original array:", array2);
array2.shift();
console.log("Shifted array:", array2);

console.log("\n________________\n");

// 6. Use sort() method to arrange the "fruits" array alphabetically
console.log("Original array:", fruits);
let sortedFruit = fruits.sort();
console.log("Sorted array:", fruits);

console.log("\n________________\n");

// 7. Use slice() method to create a new array using a portion from the 'fruits' array
console.log("Original array:", fruits);
newFruits = fruits.slice(1, 3);
console.log("Sliced array:", newFruits);

console.log("\n________________\n");

// 8. Use splice() method to insert and remove elements from the 'months' array
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
console.log("Original array:", months);
let insertedMonths = months.splice(8, 0, "Sep", "Oct", "Nov", "Dec");
console.log("Spliced (Insert) array:", months);
let removedMonths = months.splice(0, 5);
console.log("Spliced (Remove) array:", months);
