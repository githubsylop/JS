function f() {
    function makeCloser(x) {
        return function () {
            return x;
        }
    }

    var a = [];
    var i;
    for (i=0;i<3 ; i++) {

        a[i]=makeCloser(i)
    }
    return a;
}

var d =f();
console.log(typeof d);
var p = d[1]()
// var test =d[1]()


// function f() {
//     function makeCloser() {
//         return function () {
//             return b[i];
//         }
//     }

//     var a = [];
//     var b = [];
//     var i;
//     for (i=0;i<3 ; i++) {
//         b[i]=i
//         a[i]=function() {
//             return b
//         }
//     }
//     return a;
// }


var z = 1;
function x() {
var z = 2;
function n() {
    console.log(z);
}
n();
}
x();


var parse = parseInt(0xFF)
var test = { 
    name : "test"
};

var test2 =test
var o = new Object()
var tostr = o.name;
var cons= o.constructor;
console.log(cons)
var a = new Array(1,2,3,'cztery');
var a_to_string = a.toString();
var value_if =test2.valueOf()
console.log(a_to_string)
var tab_1 =[3, 5, 1, 7, "test"];
var tab_2 =tab_1.slice(0,10);
var tab_3=tab_1;
tab_2.sort();
tab_3.sort();

var obiekt= {
    imie: 'Ninja',
    mow: function(kto){
    return 'Siema ' + kto + ', jestem ' + this.imie;
    }
}

mój_obiekt = {imie: 'Programistyczny guru'};
mój_obiekt2 = {imie1: 'Programistyczny guru'};
var call_1 =obiekt.mow.call(mój_obiekt, 'stary');
var call_2 =obiekt.mow.call(mój_obiekt2, 'stary');
var boolean_1 = true;
console.log(typeof boolean_1);
console.log(call_1)
var s ="test";
console.log( s.substring(0, 2))
console.log(s.toUpperCase());
console.log(s.split("",1));