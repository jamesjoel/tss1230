// I am rohit joshi
// joshi rohit am i

var a = "I am piyush joshi";
var b = a.split(" ");
var str = "";
for(var i = b.length-1; i>=0; i--)
{
    str += " "+b[i];
}
console.log(str);