// Return a random choice from an array
const choice = (arr) => {
    let randomIdx =  Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

// Removes the first matching item and returns it. It item does not exist, returns undefined
const remove = (arr, item) => {
    let idx = arr.indexOf(item);
    if (idx !== -1) {
        return arr.splice(idx, 1); // remove the item and return it
    }
    // else
    return undefined
}

// Exports
export { choice, remove };

// // tests
// let testArr = [1,2,3,4,5];
// // Choice
// console.log(choice(testArr));
// console.log(choice(testArr));
// console.log(choice(testArr));
// console.log(choice(testArr));
// console.log(choice(testArr));
// // remove
// console.log(testArr); // => [1,2,3,4,5]
// console.log(remove(testArr, 1)); // returns 1
// console.log(remove(testArr, 3)); // returns 3
// console.log(remove(testArr, 5)); // returns 5
// console.log(remove(testArr, 5)); // returns undefined
// console.log(testArr); // => [2,4]
