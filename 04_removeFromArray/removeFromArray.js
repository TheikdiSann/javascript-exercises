const removeFromArray = function([...array], ...args) {
    for (let arg of args){
        array = array.filter((value) => value !== arg)
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
