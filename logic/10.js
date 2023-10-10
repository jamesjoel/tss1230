// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

var num = 10;
var a = 0;
var b = 1;
var sum = 0;
console.log(a);
console.log(b);
for(var i = 1; i <= num-2; i++)
{
    sum = a+b; // 5
    a = b; // 2
    b = sum; // 3
    console.log(sum);
}
