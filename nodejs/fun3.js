// 1 - 5%
// 2 - 8%
// 3 - 18%
// 4 - 28%
// gst(30000, 1);

// function gst(a, b=1){
//     switch(b){

//         case 1 : var x = a*5/100;
//                  break;              
//         case 2 : var x = a*8/100;
//                  break;              
//         case 3 : var x = a*18/100;
//                  break;              
//         case 4 : var x = a*28/100;
//                  break;              
//     }

//     var y = a+x;
//     console.log(y);

// }



var gst = (a, b=1) => {
    switch(b){

        case 1 : var x = a*5/100;
                 break;              
        case 2 : var x = a*8/100;
                 break;              
        case 3 : var x = a*18/100;
                 break;              
        case 4 : var x = a*28/100;
                 break;              
    }

    var y = a+x;
    console.log(y);

}

gst(35000, 2);
gst(35000);