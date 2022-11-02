
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
// function sumDigits(number) {
//     //compute sum of digits for the integer numbers
//    number = Math.abs(number);
//    let sum = 0;
//    number = Math.trunc(number); //get rid of the fractional part
//    do {
//         let digit = number % 10;
//         number = (number - digit) / 10;
//         sum += digit;
//    }while(number != 0);
//   return sum;

// }
// //Example
// let sum = sumDigits(123)
// console.log(sum); //should be printed out 6


/*********************************CW 12 */
// let strNum1 = "123";
// let strNum2 = '9';
// console.log(strNum1 + strNum2); //=> 1239
// console.log(strNum1 - strNum2); //=> 114
// console.log(strNum1 > strNum2);
//conversions from string to number
// let num1 = +strNum1;
// let num2 = +strNum2;
// console.log(num1 + num2); //=> 132
// console.log(num1 - num2); //=> 114
// console.log(num1 > num2); //true
// let strNumStr = '12.3ab';
// let numStr = +strNumStr;
// console.log(numStr);
// let num = parseInt(strNumStr);
// if (isNaN(numStr)) {
//     console.log("numStr is NaN")
// }
// let num10 = 123;
// let strNum10 = "" + num10;
// let strNum16 = num10.toString(36);
// console.log(strNum10, strNum16);

//conversion from Morse code to number
//symbol "." -> 0 ; "-" -> 1
// function  fromMorseToNumber(morseCode) {
//     let result = 0;
//     for (let i = 0; i < morseCode.length; i++) {
//         let code = morseCode[i] == '.' ? 0 : 1;
//         result = result * 2 + code;
//     }
//     return result;
// }
// console.log(fromMorseToNumber('-.-...-.---.-.-..--'));
// function fromNumberToMorse(number) {
//     number = Math.abs(number);
//     let res = "";
//     do {
//         let digit = number % 2;
//         let sym = digit == 0 ? '.' : '-';
//         res = sym + res;
//         number = Math.trunc(number / 2);

//     } while(number != 0);
//     return res;
// }
// console.log(fromNumberToMorse(333651));
function getSymbol(digit) {
    let codeA = 'a'.charCodeAt();
    if (digit > 9) {
        digit = String.fromCharCode(codeA + digit - 10);
    }
      
   return digit;
    //31 - 10 + 97
}
function fromNumberToString(number, base) {
    number = Math.abs(number);
    let res = "";
    do {
        let digit = number % base;
        let sym = getSymbol(digit);
        res = sym + res;
        number = Math.trunc(number / base);

    } while(number != 0);
    return res;

}
function getDigit(symbol) {
    let codeA = 'a'.charCodeAt();
    let res = symbol < '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
function fromStringToNumber(string, base) {
 
    string = string.toLowerCase();
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        let digit = getDigit(string[i]);
        result = result * base + digit;
    }
    return result;
}

//getting code from symbol 
//console.log('abc'.charCodeAt(2))

//getting symbol from code
//console.log(String.fromCharCode(126))

console.log(fromNumberToString(900550,36))
console.log(fromStringToNumber("123", 10));
console.log(fromStringToNumber("10", 16));








