const removeFromArray = function(array,...args) {
    // let array = arguments[0];
    let itemsToRemove = args;
    // for(let i=1;i<arguments.length;i++){
    //     itemsToRemove.push(arguments[i]);
    // }
    for(let item of itemsToRemove){
        let index = array.indexOf(item);
        if(index == -1) continue;
        array.splice(index,1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
