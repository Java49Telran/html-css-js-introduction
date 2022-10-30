
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
/************************************************** */
//HW #11
function sumDigits(number) {
    //compute sum of digits for the integer numbers
   number = Math.abs(number);
   let sum = 0;
   number = Math.trunc(number); //get rid of the fractional part
   do {
        let digit = number % 10;
        number = (number - digit) / 10;
        sum += digit;
   }while(number != 0);
  return sum;

}
//Example
let sum = sumDigits(123)
console.log(sum); //should be printed out 6


