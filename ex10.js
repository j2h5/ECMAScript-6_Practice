//Number 객체

let a = 12;
let b = 23.0;
let c = 12.6;
console.log(a+"는 정수인가?"+Number.isInteger(a)); //ture
console.log(b+"는 정수인가?"+Number.isInteger(b)); //true  .0 은 정수로 판단
console.log(c+"는 정수인가?"+Number.isInteger(c)); //false

let a1 = "NaN";
let b1 = NaN;
let c1 = "안녕";
let d1 = 12;

//es5의 isNaN = is Not a Number
console.log( "e5 isNaN" );
console.log( a1 +" 은 NaN인가?" + isNaN(a1) );
console.log( b1 +" 은 NaN인가?" + isNaN(b1) );
console.log( c1 +" 은 NaN인가?" + isNaN(c1) );
console.log( d1 +" 은 NaN인가?" + isNaN(d1) ); // false

//es6의 isNaN
console.log("es6 isNaN");
console.log( a1 +" 은 NaN인가?" + Number.isNaN(a1) );
console.log( b1 +" 은 NaN인가?" + Number.isNaN(b1) ); // true
console.log( c1 +" 은 NaN인가?" + Number.isNaN(c1) );
console.log( d1 +" 은 NaN인가?" + Number.isNaN(d1) );


console.log("--------------")


console.log("반복함수 repeat");
console.log('ㅋ'.repeat(10)); //반복
console.log('*'.repeat(10)); 

console.log("--------------")

var x = "20";
var y = "3";
console.log(x+y);
console.log(Number(x)+Number(y));