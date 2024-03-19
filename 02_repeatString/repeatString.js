const repeatString = function(text, times) {
    if(times < 0){
        return "ERROR"
    }
    let resultString = ""
    for (let i = 0; i < times; i++){
        resultString += text
    }

    return resultString
};

// Do not edit below this line
module.exports = repeatString;
