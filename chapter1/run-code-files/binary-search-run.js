// To see the output easier in your VS code terminal you can download an extension called "Code Runer".
// After that, just right click this file and choose "Run Code"

const binarySearch = require("../binary-search");

const result = binarySearch([10, 123, 378, 489], 378);
const result2 = binarySearch([10, 123, 378, 489], 10);
const result3 = binarySearch([10, 123, 378, 489], 489);
const result4 = binarySearch([10, 123, 378, 489], 9677);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
