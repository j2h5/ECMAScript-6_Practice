//es5 에서도 객체 개념은 있었다.

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.printProfile = function(){
//     console.log("이름은 "+this.name+" 이고 나이는 "+this.age+"세 입니다.");
// }

//es6 의 class 로 만들어 보세요
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    printProfile = () => {
        console.log("이름은 "+this.name+" 이고 나이는 "+this.age+"세입니다");
    }

    static showTitle(){
        console.log("ES6 의 정적함수");
    }
}

let p1 = new person("이영자", 34);
p1.printProfile();
Person.showTitle(); //static 함수는 클래스 명으로 호출

//prototype에 등록이 되어있는지 확인 할때
// console.log("printProfile" in p1.__proto__);
// console.log("printProfile" in Person.prototype);