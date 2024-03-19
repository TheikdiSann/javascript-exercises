const sumAll = function(num, times) {
    if((typeof(num) === "number" && num > -1) && (typeof(times) === "number" && times > -1)){
        let sum = 0
        if(num < times){
            for (let i = 0; i < times; i++){
                sum += num++
            }
            return sum
        }else{
            for (let i = 0; i < num; i++){
                sum += times++
            }

            return sum
        }
        
    }else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
