// var a = "nitin";





var a = "a124BCD40df";
var arr = a.split("");



var counter1 = 0;
var counter2 = 0;

arr.forEach((value)=>{
    if(isNaN(value)==false)
    {
        counter1++;
    }else{
        
        counter2++;
    }
})
console.log(counter1)
console.log(counter2)

