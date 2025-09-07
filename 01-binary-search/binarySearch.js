
// we take a sorted array as an input
function binarySearch(array, item) {
  let low = 0;
  let high = array.length - 1;
  let middle;

  while (low <= high) {
    // check the middle element of the array
    middle = Math.floor((low + high) / 2);
    let guess = array[middle];

    if (guess == item)
      return middle;

    if (guess > item)
      high = middle - 1;

    else
      low = middle + 1;
  }
  return -1;
}

let myList = new Array(1, 3, 5, 7, 9);

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));