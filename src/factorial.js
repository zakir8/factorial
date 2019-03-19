// Explaination:
// There is an iterative approach to finish factorial, and I have chosen the recursive approach
// I need to take care of the invalid user inputs such as negative numbers and also the base case of 1 and 0

// For a number above 1, here is the logic for factorial:
// It will create a tree for all the factorials going all the way down to factorial(1) and factorial(0) and propogating back up while multiplying
// It's a Big O(n)
function factorial(n) {
    if(n < 0) {
        return -1; // Invalid user input. Needs to be positive number

    } else if (n >= 0 && n <= 1) { // base case
        return n;

    } else {
        return n * factorial(n -1);

    }
}

exports.factorial = factorial;
