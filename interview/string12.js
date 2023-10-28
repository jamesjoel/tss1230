var arr = [4, 12, 8, 4, 5, 8, 12, 4, 9, 12];


const counts = {};
arr.forEach(x => { 
    counts[x] = (counts[x] || 0) + x; 
    // console.log(counts[x]);
});
console.log(counts)

