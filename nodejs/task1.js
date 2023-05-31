var arr = ["hi", "dfrde", "def", "ertdfger", "a", "retdsfgserg", "gref"];
var n = arr.length; // 7

var x = 0;
for(var i = 0; i<=n-1; i++)
{
    if(x < arr[i].length){
        x = arr[i].length;
    }
}
console.log(x);