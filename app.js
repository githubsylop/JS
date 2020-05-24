
function f(arg) {
  var n = function(){
  return arg;
  };
  arg++;
  return n;
  }
  var m =f(123)
  
  console.log(m())
 
  console.log( f(125))
function a () {return 1;}
function b() {return 2;}

function add_1 (a ,b) {
    return a()+b()
}
var s =add_1(a,b)
console.log(s);


console.log(parseFloat('123E-4'));

function test(a ,b) {

  return arguments;
  
}

test1 = test(1,2,'g',"sad")
console.log(test1)

var msg = "\u0421\u0442\u043E\u044F\u043D";
console.log(msg);



function trimArray(arr) {
    var lastIndex = arr.length - 1;
    var start = 0;
    for (; start <= lastIndex; start++) {
      if (arr[start])
        break;
    }
  
    var end = lastIndex;
    for (; end >= 0; end--) {
      if (arr[end])
        break;
    }
  
    if (start === 0 && end === lastIndex)
      return arr;
    if (start > end)
      return [];
    
    return arr.slice(start, end + 1);
  }
  
var  x =0377;
console.log(x)

var y ='1';
var z;
z=parseInt(y);
console.log(z)
b = trimArray (["", "s", "BMW"])

console.log(b);
function add(a ,b) {
    var length =arguments.length;
    var result =0;
    for (var i=0;i<length;i++) {
        result=result+arguments[i];
    }
    return arguments;
    
}

var d=add(1,2,3,4,'daad');
console.log(d);

var test = 'add(1,2,3,4,"daad")';
var n =eval(test);
console.log(n);
const splitDeviceRe =
    /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
function win32SplitPath(filename) {
    // Separate device+slash from tail
    var result = splitDeviceRe.exec(filename),
        device = (result[1] || '') + (result[2] || ''),
        tail = result[3];
    // Split the tail into dir, basename and extension
    var result2 = splitTailRe.exec(tail),
        dir = result2[1],
        basename = result2[2],
        ext = result2[3];
    return [device, dir, basename, ext];
  }
  const splitTailRe =
  /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;

var win32 = {};


var test =3;