function add()
{
    let a = 0;
    return function()
    {
    let a = 0;
    a++;
    }
}
add()
add()
add()

console.log(a);