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
console.log(isNaN(test8));
var url = 'http://www.packtpub.com/scr ipt.php?q=this and that';
var codeurl= encodeURI(url);
console.log(encodeURI(url));
console.log(decodeURI(codeurl));
var a = 123;
function f() {
    console.log(a);
var a = 1;
console.log(a);
}
f();
console.log(typeof f)
// var f =2 if uncomment this line the interpreter throw error
console.log(typeof f)

f();

function pomnozRazyDwa(a, b, c) {
    var i, ar = [];
    for(i = 0; i < 3; i++) {
        ar[i] = arguments[i] * 2;
        ar[i]=dodajJeden(ar[i]);
    }
    return ar;
}
function dodajJeden(a) {
    return a + 1;
}
setImmediate(() => {

var myarr = pomnozRazyDwa(1, 2, 3, dodajJeden);


});

var myarr = pomnozRazyDwa(1, 2, 3, dodajJeden);

function a_1 () {
    var b = function () {
        return 'b'
    };
    return b
}

var test_function =a_1()
var c=test_function()
var d = a_1()()
