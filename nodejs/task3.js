var data1 = ["amar", "rohit", "jaya", "gaurav", "amit", "nilesh"];
var data2 = ["gaurav", "vijay", "nilesh"];

var n = data2.length; // 3
var m = data1.length; // 6

for(var a = 0; a <= n-1; a++)
{
    var x = data2[a]; // gaurav, vijay, nilesh
    var check = true;
    for(var b = 0; b <= m-1; b++)
    {
        if(x == data1[b])
        {
            check = false;
        }
    }
    if(check==true)
    {
        data1.push(x);
    }
}


console.log(data1);
