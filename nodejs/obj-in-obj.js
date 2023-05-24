var info = {
    data1 : {
        name : "rohit",
        age : 25,
        hobby : {
            a : "cricket",
            b : "football",
            c : {
                x : 10,
                y : 20,
                z : 30
            }
        }
    }
}

console.log(info.data1.hobby.c.z);