//객체 할당
let obj1 = {"name":"lee", "age":23};
console.log(obj1.name, obj1.age);

//오브젝트 대입
let obj2 = obj1;
console.log(obj2.name, obj2.age);

//이름, 나이를 단일변수에 대입(es5)
let name1 = obj2.name;
let age1 = obj2.age;
console.log(name1,age1);

//es6
let name,age; // 객체의 맴버와 같은 이름으로 선언
({name,age}=obj1); //  따로 분리해서 꺼내는 방법
console.log(name,age);

console.log("--------------")

//함수 인자로 객체를 보낼 경우
function f1({name='수지', age=20}={}){ //수지, 20이 초기값
    console.log(name,age);
}
//함수 호출
f1(obj1);// lee 23
f1(); // 수지 20
f1(obj1.name); // lee 20으로 나올 것 같지만, 수지 20으로 나옴
                // 객체형태로 보내지 않으면 초기값으로 나옴.(멤버만 보내면 안됨)