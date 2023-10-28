var a = "moy namxe ies james joel";
var arr = a.split("");

var x = 0;
var y = 0;

arr.forEach(value=>{
    if(value == "a" || value == "e" || value == "i" || value == "o" || value == "u")
    {
        x ++;
    }
    else{
        y++;
    }
})


console.log(x)
console.log(y)