var x="Hello World"
/*console.log(x)
console.log(typeof(x))
x=1
console.log(x)
console.log(typeof(x))
x=false
console.log(x)
console.log(typeof(x))
x=23.5
console.log(x)
console.log(typeof(x))
x=null
console.log(x)
console.log(typeof(x))
var y =new Object()
console.log(y)
console.log(typeof(y))*/
var makesub=function(mul){
    var kaam=function(x){
        return mul-x;
    }
    return kaam;
};
var c=makesub(10);
var d=makesub(9);
var e=makesub(9);
console.log(c);
console.log(e);

console.log(c(3),d(3),e(10));