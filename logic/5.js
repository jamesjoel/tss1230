//How do you find the maximum element in an array?

// var arr = [9, 10, 17, 3, 6, 15, 100, 40];
var arr = ["rohit", "amar", "a", "x", "abc", "abcedr", "gg"];
var a = arr[0].length;

arr.forEach((value)=>{
    
    if(a < value.length)
    {
        a = value;
    }
})

console.log(a);