var a =100;
let b =200;
const c =300;
{
    var a ="10block";
    let b ="20block";
    const c ="30block";
    console.log("a:",a,"b:",b,"c:",c,"in block")
    function x(){
        var a ="10f";
        let b ="20f";
        const c ="30f";
        console.log("a:",a,"b:",b,"c:",c,"in function")
    }
}
x();
console.log("a:",a,"b:",b,"c:",c,"global")

