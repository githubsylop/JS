var re = new RegExp('j.*t', 'gmi');
// var re1 = new RegExp('j.*t', 'gmis'); //SyntaxError: Invalid flags supplied to RegExp constructor 'gmis'
var re2 = /j.*t/i;
var result = re2.test('Javat');
var result_exec =/j.*t.*v.*t/ig.exec("JavascriptasdJavascript")
console.log(result_exec[0]);
var s = new String('HHelloJavaScriptWorld');
var result_s =s.replace(/j.*t/i,'DUPA')
var result_s_test =s.replace(/([A-Z])/g, "_$&");