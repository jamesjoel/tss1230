var hello = (a, b) =>{
    var x = a*a;
    var y = b*b;

    return { ans1 : x, ans2 : y};
}




var { ans1: a, ans2 : b } = hello(4, 7);

console.log(a)
console.log(b)

/*
    this fun will return a object with ans1, ans2 pro name


*/
