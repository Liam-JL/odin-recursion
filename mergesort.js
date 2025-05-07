// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
function mergeSort(arr){
    if (arr.length === 1) {
        return arr;
    }

    let mid = arr.length/2;
    let A = mergeSort(arr.slice(0, mid));
    let B = mergeSort(arr.slice(mid));
    
    return merge(A, B)

}

const arr = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(mergeSort(arr))


//Base case is 0 or 1 element array
//Break down an array until it is 1 array and then merge them back together in order
//An array of 1 is always sorted.
//You can then merge 2 sorted arrays recursively with each pass the arrays are always sorted

//Merges 2 sorted arrays
function merge(A, B) {
    let C = []
    let i = 0;
    let j = 0;

    while(i < A.length && j < B.length) {
        if(A[i] <= B[j]){
            C.push(A[i])
            i++
        } else {
            C.push(B[j]);
            j++
        }
    }
    return C.concat(A.slice(i)).concat(B.slice(j));
}

