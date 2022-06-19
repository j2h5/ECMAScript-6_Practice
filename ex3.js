/*
    var : 함수형 변수
    let : 영역형 변수
*/

var a=1;
let b=2;

function myFunction(){
    var a=3; //6번행 변수와 전혀 다른 변수
    let b=4; //7번행 변수와 전혀 다른 변수
    
    if(true){
        var a=5; //10번행의 a값을 덮어쓴다
        let b=6; //11번행의 b와 전혀 다른 변수
        console.log(a); //5
        console.log(b); //6
    }
    console.log(a); //5
    console.log(b); //4
}

myFunction();
console.log(a); //1
console.log(b); //2