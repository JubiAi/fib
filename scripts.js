// FIBONACCI SEQUENCE

// Memoization
memo = {0:1, 1:1};

function fib_dyn(n) {
    if (n in memo) {
        return memo[n];
    }
    else {
        memo[n] = fib_dyn(n-1) + fib_dyn(n-2);
        return memo[n];
    }
}

// Print the memo
function fib_series(n){
    for (k in memo)
        document.write("<b>"+k+"</b>:"+memo[k]+"</br>");
}

// Recursion
function fib_rec(n) {
    if (n==0 || n==1) {
        return 1;
    }
    else {
        return fib_rec(n-1) + fib_rec(n-2);
    }
}

//////////////////////////////////////////////////




// SORTING TECHINQUES

// Selection Sort
function selectionSort(nums) {
    return nums
}

// Insertion Sort

// Bubble Sort

// Merge Sort

// Quick Sort

// Heap Sort
