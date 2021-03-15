class Animal {
    // 和 java 一样，未指定时有默认的空构造器
    constructor(name, age) {
        this.name = name;
        this.age = age;
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

class Rectangle {
    // constructor
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
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

console.log(square.area);
// 100