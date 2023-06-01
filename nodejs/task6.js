var a = 12;
var check = true;

for(var i = 2; i <= a/2; i++)
{
    if(a % i == 0){
        check = false;
        break;
    }
}

if(check){
    console.log("YES....", a, " is a prime number")
}else{
    
    console.log("NO ....", a, " is NOT A prime number")
}