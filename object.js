var re = new RegExp('j.*t', 'gmi');
// var re1 = new RegExp('j.*t', 'gmis'); //SyntaxError: Invalid flags supplied to RegExp constructor 'gmis'
var re2 = /j.*t/i;
var result = re2.test('Javat');
var result_exec =/j.*t.*v.*t/ig.exec("JavascriptasdJavascript")
console.log(result_exec[0]);
var s = new String('HHelloJavaScriptWorld');
var result_s =s.replace(/j.*t/i,'DUPA')
var result_s_test =s.replace(/([A-Z])/g, "_$&");
var result_s_test2 =s.replace(/([A-Z])/g, "_");
var email ="test@google.com";
var nazwa_uzytkownika = email.replace(/(.*)@(.*)/, "$&");
var nazwa_uzytkownika1 = email.replace(/(.*)@(.*)/, "$1");
var nazwa_uzytkownika2 = email.replace(/(.*)@(.*)/, "$2");
function replaceCallback (match, index, string_value) {

    return "_" + match.toLowerCase();
}
var test3 = s.replace(/[A-Z]/g,replaceCallback) ;
var callback = function(){
    glob = arguments;
    return arguments[1] + ' on server : ' + arguments[2] + ' dot ' + arguments[3];
}
var re = /(.*)@(.*)\.(.*)/;
var glob;
var mail_data ="stoyan@phpied.com".replace(re, callback);
try {
test()
} catch (fault) {
    var fault_data =fault;
    console.log(fault)
}

