
var array =[10,10,10,6,.5]
function findAverage(){
    var total = 0
    for(var i=0; i<array.length; i++){
        total += array[i]
        
    }
    return total/array.length
}
console.log(findAverage());


