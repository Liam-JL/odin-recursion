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

function fibsRec(n) {
    if(n === 0) {
        return [0];
    }
    if(n === 1) {
        return [0, 1]
    }

    const prev = fibsRec(n-1);
    const next = prev[prev.length -1] + prev[prev.length - 2]
    return [...prev, next]
}

console.log(fibsRec(50))

//takes number returns array
function countdown(n) {
    if (n === 0) {
        return [n];
    } else {
        return [n].concat(countdown(n-1))
    }
}

function range(n) {
    console.log("Calling range(", n, ")");
    if (n === 1) {
      console.log("Base case hit: return [1]");
      return [1];
    } else {
      const result = [...range(n - 1), n];
      console.log("Returning:", result);
      return result;
    }
  }
  
