// prime number
var str = "";
for(var num=1; num<=100; num++)
{
    var check = true;
    for(var i =2; i <= num/2; i++)
    {
        if(num % i == 0)
        {
            check = false;
            break;
        }
    }
    if(check)
    {
        str += ", "+num;
    }
    
}
console.log(str);
