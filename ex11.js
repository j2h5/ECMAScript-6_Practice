const r = (w,h) => {
    if(Number.isNaN(w*h)){
        return "가로, 세로값이 숫자가 아닙니다.";
    }else{
        console.log(`가로가 ${w}, 세로가 ${h} 인 사각형의 너비는 ${w*h}입니다`);
        return w*h;
    }
}

//함수 호출
console.log(r(4,5));
console.log(r('hello',10));

console.log("--------------")

//include 함수
let msg = `우리는 지금 
    ecma script 6 를 공부하고 
    있어요`;
console.log(msg);

console.log(msg.includes("script")); //script 라는 문자열을 포함하고 있으면 true
console.log(msg.startsWith("우리는")); //특정 단어로 시작하면 true
console.log(msg.endsWith("다")); //특정 단어로 끝나면 true
