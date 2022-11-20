// function getAddressKey() {
   
//     return "address";
// }
// const person = {id: 123, first_name: 'Vasya',
//  last_name: 'Ivanov', year: 2000, address: {city: 'Lod',
//   street: 'Sokolov', app: 100}
// };
// const name1 = getAddressKey();

// console.log(person[name1])
// const personArr = [123, 'Vasya', 'Ivanov', 2000,
//  ['Lod', 'Sokolov', 100]]
//  console.log(personArr[3])
//  console.log(person.address);
 function displayOccurrences(strings) {
    const occurrences = {};
    strings.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });
    //console.log(Object.entries(occurrences));
    const occurrencesAr = Object.entries(occurrences)
    occurrencesAr.sort((e1, e2) => e2[1] - e1[1])
    console.log(occurrencesAr);

 }
//  const x = {};
//  const string = "abc";
//  x[string] = 1;
//  console.log(x);
//  x[string]++;
//  console.log(x);
const strings = ["a","opr","lmn", "abc", "lmn","abc", "lmn", "lmn", "abc", "a"];
displayOccurrences(strings);