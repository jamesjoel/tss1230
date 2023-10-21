for(var b=1; b<=8; b++){
    var str = "";
    var num="";
    for(var a = 1; a <= b; a++)
    {
        str += "*";    
        num += a;
    }
    if(b % 2 == 0)
    {
        console.log(num)
    }
    else{
        console.log(str);
    }
}