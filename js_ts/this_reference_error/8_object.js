var person = {
    name: "홍길동",
    birthday: "030219",
    age: 30,
    pId: "1234567",
    fullId: function() {
        return birthday + pId;
    }
};
person.fullId() // 0302191234567
person.fullId;  // function () { return this.birthday + this.pId; } 

//생성자(constructor)를 이용한 객체 생성
var day = new Date(); // new 연산자를 사용하여 Date 타입의 객체를 생성함.
console.log("올해는 " + day.getFullYear() + "년입니다.");