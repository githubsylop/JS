var infinity = 1e329;
var fault = 1/0;
fault
console.log( fault);
console.log('test');
var v = v || 10;
console.log(v)
var d = !!"false";
var s = '1s'; s++;
console.log(s)
var test= 10 % 0;
console.log(test)
var test2 = "1"
test2= test2 + 3
var  test3 = test2 + 13
var  test4 = test2 / 13
console.log(test3)
console.log(test4)
function sum(a, b) {
    if (typeof(a) === "undefined" || typeof(b) === 'undefined') {
        return "dupa"
    } 
    var c = a + b;
    return c;
}

var test5 = sum('asd','345' );
console.log(test5)

function sumaNaSterydach(a) {
    var i, res = 0;
    var liczba_parametrow = arguments.length;
    for (i = 0; i < liczba_parametrow; i++) {
    res += arguments[i];
    }

    return res;
}

var test7 =sumaNaSterydach(4,5)
var test8 = parseInt("w2asd")
var test9 = parseFloat("12e2")
console.log(isNaN(test8))