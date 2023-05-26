var data = [10, 15, 17];

// var [...a] = data;

var a = [...data];
// how to copy a array

data[0] = 50;

console.log(a);
console.log(data);

// var [a, b, ...c] = data;

// console.log(a);
// console.log(b);
// console.log(c);