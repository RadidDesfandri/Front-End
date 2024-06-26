function doubleChar(str) {
    let splt = str.split('')
    let hasil = ''
    for (let i = 0; i < splt.length; i++) {
        hasil += (splt[i] + splt[i])
    }
    return hasil
}
console.log(doubleChar("String"));


var min = function (list) {
    list.sort((a, b) a - b)
    return list[0];
}

var max = function (list) {
    list.sort((a, b) => b - a)
    return list[0];
}