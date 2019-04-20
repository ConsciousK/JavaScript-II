// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

  // getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length)
});

  // last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

last(items, function(last) {
  console.log(last)
});

  // sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(1, 8, function(answer) {
  console.log(answer)
});

  // multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x * y)
}

multiplyNums(5, 5, function(answer) {
  console.log(answer)
});


  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  list.forEach(item => {
    if (list.item = item)
    return cb(true)
    else return cb(false)
  });
}

contains("gum", items, function(isTrue) {
  console.log(isTrue)
});


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
