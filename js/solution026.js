// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input

// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output

// The function should return an integer, the total time required.

// Important

// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples

// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications

// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

function queueTime(customers, n) {
    // array variable to store the total times each checkout till completes
    let arr = [];
    // the variable length to store the smaller of the two, length of array or total number of checkout tills
    let length; 
    // if empty array, return 0
    if (customers.length == 0) return 0;
    // determines the smaller of thw two, customer array length or the number of checkout tills and stores in above length array
    customers.length > n ? length = n : length = customers.length
    
    // creates elements in the array variable 'arr' with the first customers while removing customers from the customer array as well
    for (i = 0; i < length; i++) {
      let num = customers.shift();
      arr.push(num);
    }
    // while customer array is not empty, remove first customer and add to the smallest value in the 'arr' array
    while (customers.length > 0) {
      let num = customers.shift();
      let smallest = Math.min(...arr);
      let index = arr.indexOf(smallest);
      arr[index] += num;
    }
    return Math.max(...arr)
  }