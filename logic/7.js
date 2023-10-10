var a = "abcxcba";

var arr = a.split("");
var str = "";
for(var i = arr.length-1; i>=0; i--)
{
    str += arr[i];
}

if(a == str)
{
    console.log("YES");
}
else{
    console.log("NO");
}