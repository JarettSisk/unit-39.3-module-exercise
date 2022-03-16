// imports
import fruits from './foods.js';
import {choice, remove} from './helpers.js';

// 1.
let randomFruit = choice(fruits);
// 2
console.log(`Id like one ${randomFruit}, please`);
// 3.
console.log(`Here you go: ${randomFruit}`);
// 4.
console.log(`Delicious! May I have another?`);
// 5.
remove(fruits, randomFruit);
// 6.
console.log(`Im sorry, were all out. We have ${fruits.length} fruits left`);

