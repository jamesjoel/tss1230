var counter = 5;
for(var b = 1; b <= 5; b++)
{
    var str = "";
    var space = "";
    for(var c = counter-1; c >= 1; c--)
    {
        space +=" ";
    }
    for(var a = 1; a <= b; a++)
    {
        
        str += "*";
    }
    console.log(space+str);
    counter--;
}