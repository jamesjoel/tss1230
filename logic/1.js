// reverse string
let a = "amar joshi";
let arr = a.split("");

let str="";

for(let i = arr.length-1; i >= 0; i--)
{
    str += arr[i];
}

console.log(str);

// let a = "i am rohit joshi"
// joshi rohit am i