//returns array containing that many numbers of the fibonacci sequence
function fibs(n) {
    let fibArray = [];

    for (let i = 0; i < n; i++) {
        if (i < 2){
            fibArray.push(i);
        } else {
            fibArray.push(fibArray[i-2] + fibArray[i-1])
        }
    }

    return fibArray;
}

console.log(fibs(8))