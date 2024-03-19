const fibonacci = function(times) {

/*     if(times < 0){
        return "OOPS"
    }

    let countNum = parseInt(times)

    if(countNum === 1 ) return 1;
    if(countNum === 0 ) return 0;

    let f1 = 0, f2 = 1;
    let result = 0;
    for (let i = 2; i <= countNum  ; i++){
        result = f1 + f2;
        f1 = f2;
        f2 = result
    }

    return result */

    let count;
    if( typeof(times) === "number"){
        if(times < 0) return "OOPS"
        count = times
    }else{
        count = parseInt(times)
    }

    if(count === 1) return 1;
    if(count === 0) return 0;

    const fib = [0, 1]//0 1 1 2 3

    for (let i = 2; i <= count; i++){
        fib[i]= fib[i-1] + fib[i-2]
    }

    return fib[count]
};


// Do not edit below this line
module.exports = fibonacci;
