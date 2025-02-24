// closure 1
// function x(){
//     var a=1;
//     function y(){

//     console.log(a)
//     }
//     y();
// }
// x();

// closure 2
// function x(){
//     var a=1;
//     function y(){
//     console.log(a)
//     }
//     return y;
// }
// var z= x();
// console.log(z)
// z();

// closure 3
function z(){
    var b=2;
    function x(){
        var a=1;
        function y(){
        console.log(a,b)
        }
      y();
    }
    x();
}
z();
