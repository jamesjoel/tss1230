var arr = [7, 14, 20, 8, 3, 26, 21];
var temp = arr[0];
arr.forEach((value)=>{
    if(temp > value)
    {
        temp = value;
    }
})
console.log(temp);
