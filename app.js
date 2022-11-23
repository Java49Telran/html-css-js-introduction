function isAnagram(str1, str2) {
    let res = false;
    if (str1.length == str2.length) {
        const str1Occurrences = getSymbolOccurrences(str1);
        res = checkAnagram(str1Occurrences, str2);
    }
    return res;

}
function symbolProcessing(res, cur) {
    if (res[cur]) {
        res[cur]++;
    } else {
        res[cur] = 1;
    }
    return res;
}
function getSymbolOccurrences(string) {
    const stringArray = Array.from(string);
    return stringArray.reduce(symbolProcessing
        , {});
}

function checkAnagram(occurrences, string) {
    const stringArray = Array.from(string);
   
    return stringArray.every(symbol => {
        let res = false;
        if (occurrences[symbol]) {
            res = true;
            occurrences[symbol]--
        }
        return res;

    })

}
isAnagram("yellow","oolley")

