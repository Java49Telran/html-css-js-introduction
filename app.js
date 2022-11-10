// function ulSurround(strings) {
//     let res = strings.map(str => `<li>${str}</li>`)
//     res.unshift("<ul>");//res.splice(0, 0, "<ul>"); 
//     res.push("</ul>");//res.splice(strings.length, 0, "</ul>")
//     return res;
// }
// let ar = ["123", "abc", "lmn", "lmn"];
// console.log(`input: ${ar} output: ${ulSurround(ar)}`)
// function count(array, element) {
//     return array.reduce((res, cur) => cur == element ? res + 1 : res, 0);
// }
// let str = "abc"
// console.log(`input: ${ar}, counter of ${str} is ${count(ar, str)} `)
// function arrayCopy(src, srcPos, dst, dstPos, length) {
//     let arForCopy = src.slice(srcPos, srcPos + length); 
//     dst.splice(dstPos, 0, ...arForCopy);
//     //arForCopy.forEach((e, i) => dst.splice(dstPos + i, 0, e));
//     return dst;
// }
// let ar1 = [1, 2, 3, 4, 5, 6];
// let ar2 = [10, 30, 40, 50];
// arrayCopy(ar1,2,ar2,1,3);

// console.log(`ar1: ${ar1}, ar2: ${ar2} arrayCopy(ar1,2,ar2,1,3): ${ar2}`)

// function move(array, index, offset) {
//     let movedElem = array.splice( index, 1)[0];
//     array.splice(index + offset, 0, movedElem);
//     return array;
// }
function getEvenNumbers(numbers) {
    let res = numbers.filter((n) => i % 2 == 0);
    return res;
}
let ar=[ 2,9, 3, 1999];
ar.sort((a, b)=>a - b);

console.log(ar);
ar = ["abc","a", "lmn", "y"];
ar.sort((a, b)=>a.length - b.length);
console.log(ar);





