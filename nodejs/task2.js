var arr = [7, 14, 20, 8, 6, 104, 47, 96, 35, 19]
var n = arr.length;

var x = 0;

for(var i=0; i<=n-1; i++)
{
    if(x < arr[i]){
        x = arr[i];
    }
}
console.log(x);