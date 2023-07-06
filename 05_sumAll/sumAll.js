function isValid(n){
    return ((typeof n === "number") && n >= 0);
}
const sumAll = function(start,end) {
    if(!(isValid(start) && isValid(end))) return "ERROR";
    if(start > end) [start,end] = [end,start]; 
    let sum = 0;
    for(let i=start;i<=end;i++){
        sum += i;
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
