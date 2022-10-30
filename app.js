
// console.log("Hello world");
// for( i = 0; i < 3; i++) {
//     setTimeout(function(){
//         console.log(i)
//     });
// }
 i = 100;
// for (let i = 0; i < 3; i++) {
//     setTimeout(function () { console.log(i) });
// } => 0 1 2

// for (var i = 0; i < 3; i++) {
//      console.log(i) ;
// }
// function sum(op1, op2) {
//     let res = op1 + op2;
//     return res;
// }
// let op1 = 10;
// let op2 = 20;
// let res = sum(op1, op2);
// console.log(res)
function sumDigits(number) {
    number = Math.abs(number)
    let res = 0;
    do{
        let num=number%10;
        res = res + num;
        number = Math.trunc(number / 10);
    }while (number != 0);
    return res; 
}
//Example
console.log(sumDigits(623)); //should be printed out 6

