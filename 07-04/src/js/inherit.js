class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("hello 呀!");
    }
}

class Chinese extends Person {
    constructor(name, age, IDNo) {
        super(name, age);
        this.IDNo = IDNo;
    }

}

class America extends Person {

}

const c1 = new Chinese('Java', 18, '123*****');
const a1 = new America('Edge', 18);
console.log(c1)
console.log(a1)
c1.sayHello();
a1.sayHello();