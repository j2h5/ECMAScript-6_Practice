class School{
    constructor(sname){
        console.log("부모 클래스 생성자 호출")
        this.sname = sname;
    }

    writeSchool(){
        console.log(`나의 학교 명은 ${this.sname} 고등학교 입니다.`);
    }
}

//상속
class Student extends School{
    constructor(sname, myname){
        super(sname); // 절대 생략 안됨(JAVA에선 생략가능)
        console.log("자식 클래스 생성자 호출");
        this.myname = myname;
    }

    writeInfo(){
        this.writeSchool();
        console.log(`내 이름은 ${this.myname} 입니다`);
    }
}

let a = new Student("휘문", "이지성");
a.writeInfo();