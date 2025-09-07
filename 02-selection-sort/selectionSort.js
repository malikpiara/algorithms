function findSmallest(array) {
    let smallest = array[0] // stores the smallest value.
    let smallestIndex = 0 // stores the index of the smallest value.
    for (let number = 0; number <= array.length - 1; number++) {
        // if the value stored is smaller than what we are
        // storing in the 'smallest' variable, update the values in the variables.
        if (array[number] < smallest) {
            smallest = array[number];
            smallestIndex = number;
        }
    }
    return smallestIndex;
}

function selectionSort(array) {
    let newArray = [];
    const copiedArray = [...array] // copy array before mutating.

    for (let i = 0; i < array.length; i++) {
        // finding the smallest element in the array
        const smallestIndex = findSmallest(copiedArray)
        newArray.push(copiedArray.splice(smallestIndex, 1)[0]);
    }
    return newArray;
}

const sourceArray = [5, 3, 6, 2, 10];
const sortedArray = selectionSort([5, 3, 6, 2, 10]);

console.log("Source array: ", sourceArray); // [5, 3, 6, 2, 10]
console.log("New sorted array: ", sortedArray); // [2, 3, 5, 6, 10]

