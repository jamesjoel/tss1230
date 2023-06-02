function demo(a, b){
    var x = a+b;
    var y = a*b;
    var z = a-b;

    // return [x, y, z];
    return { m : x, n : y, p : z };
}


var ans = demo(10, 5);
console.log(ans.m);
