var sum = 0;
process.argv.forEach(function(item,index){
    if(index >= 2){
        sum += parseInt(item);
    }
});
console.log(sum);

//Alternative solutions 

// var sum = 0;
// var array = process.argv.slice(2);
// array.forEach(function(item){
    
//     sum += parseInt(item);
    
// });
// console.log(sum);