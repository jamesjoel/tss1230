var arr = [10, 45, 10, 8, 9, 47, 60, 19];

var ans = arr.reduce((acu, value)=>{
    // if(acu > value)
    // {
    //     return acu;
    // }
    // else{
    //     return value;
    // }
    return acu > value ? acu : value;
})

console.log(ans);