var data1 = ["amar", "rohit", "jaya", "gaurav", "amit", "nilesh"];
var data2 = ["gaurav", "vijay", "nilesh"];

var n = data2.length;

for(var a = 0; a <= n-1; a++)
{
    var x = data2[a];
    var m = data1.indexOf(x);
    if(m == -1)
    {
        data1.push(x);
    }
}

console.log(data1);