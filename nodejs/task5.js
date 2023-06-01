var arr = ["hi", "hello", "amar","iti","vijay", "nitin", "jaya", "naman"];

var n = arr.length;

var ans = [];
for(var i = 0; i < n; i++)
{
    var x = arr[i]; // hi
    var arr2 = x.split(""); // ["h", "i"]
    arr2.reverse(); // ["i", "h"]
    var y = arr2.join(""); // ih

    if(x==y){
        // var ans = x;
        ans.push(x);
    }
}


console.log(ans);
