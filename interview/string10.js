var a = "hello";
var b = "eollh";

var arr1 = a.split("");
var arr2 = b.split("");

var check = true;

arr1.forEach(value1=>{
    let n = arr2.indexOf(value1);
    if(n < 0){
        check = false;
        return;
    }
})

console.log(check ? "YES" : "NO");