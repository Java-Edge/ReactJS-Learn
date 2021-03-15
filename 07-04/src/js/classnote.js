function Person() {
    // static info = "eee"
}

Person.show = function () {
    console.log('这是 person 的静态方法')
};

/**
 * 1. 在class 的{ }区间内，只能写构造器、静态方法和静态属性、实例方法
 * 2. class关键字内部，还是用原来的配方实现的;所以说，我们把class关键字，称作语法糖
 */
class Animal {
    // 和 Java 一样，未指定时有默认的空构造器
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static show() {
        console.log('这是动物的静态方法');
    }
}
Animal.prototype.say = function () {
    console.log('这是动物的实例方法')
}
Animal.info = "sss";
const a1 = new Animal('狗蛋儿', 3);
console.log(a1);
console.log(a1.name);
console.log(a1.age);
console.log(a1.info);
console.log(Animal.info);
a1.say();
Person.show();
Animal.show();

class Rectangle {
    // constructor
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // info = '222';

    // Getter
    get area() {
        return this.calcArea()
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(10, 10);

console.log(square.calcArea());
// 100