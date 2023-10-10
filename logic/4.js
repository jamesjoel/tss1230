//How do you find the count for the occurrence of a particular character in a string?

var x = "e";
var a = "jameees joerereel";

var arr = a.split("");

var counter = 0;

arr.forEach((value)=>{
    if(value == x)
    {
        counter++;
    }
})

console.log(counter);