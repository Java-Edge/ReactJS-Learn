- [相关源码地址](https://github.com/Wasabi1234/ReactJS-Learn)

使用 class 声明创建一个基于原型继承的具有给定名称的新类。
```js
class Animal {
    // 和 java 一样，未指定时有默认的空构造器
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const a1 = new Animal('狗蛋儿', 3);
console.log(a1);
console.log(a1.name);
console.log(a1.age);
```
![](https://img-blog.csdnimg.cn/20210313173822743.png)

你也可以使用类表达式定义类。但是不同于类表达式，类声明不允许再次声明已经存在的类，否则将会抛出一个类型错误。

# 语法

```js
class name [extends] {
  // class body
}
```
# 声明一个类
在下面的例子中，我们首先定义一个名为Polygon的类，然后继承它来创建一个名为Square的类。注意，构造函数中使用的 super() 只能在构造函数中使用，并且必须在使用 this 关键字前调用。

```bash
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}
```

# 重复定义类
重复声明一个类会引起类型错误。

```js
class Foo {};
class Foo {};
// Uncaught TypeError: Identifier 'Foo' has already been declared
```

若之前使用类表达式定义了一个类，则再次声明这个类同样会引起类型错误。

```js
let Foo = class {};
class Foo {};
// Uncaught TypeError: Identifier 'Foo' has already been declared
```
# 属性
通过new出来的实例，访问到的属性，叫做[实例属性]。
```js
console.log(p1.name)
console.log(p1.age)
```
[静态属性] :通过构造函数，直接访问到的属性，叫做静态属性。

```js
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// 静态属性
Animal.info = "sss";
```
# 方法
## 实例方法
定义：
```js
Animal.prototype.say = function () {
    console.log('这是动物的实例方法')
}
```
# 类的继承
```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Chinese extends Person {

}

class America extends Person {

}

const c1 = new Chinese('Java', 18);
const a1 = new America('Edge', 18);
console.log(c1)
console.log(a1)
```
![](https://img-blog.csdnimg.cn/20210315135555595.png)
## 子类构造器
观察发现，子类必须调用 super 才可以哦，这在 Java 中也是一样的：如果一个子类通过extends 关键字继承了父类，那么，在子类的constructor 构造函数中，必须优先调用一下super()。
![](https://img-blog.csdnimg.cn/2021031514032826.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNTg5NTEw,size_16,color_FFFFFF,t_70)

super是一个函数，而且它是父类的构造器，子类中的super, 其实就是父类中，constructor 构造器的一个引用。


如果只是随便写个调用
```js
class Chinese extends Person {
    constructor() {
        super();
    }
}

const c1 = new Chinese('Java', 18);
console.log(c1)
```
就会发现未定义
![](https://img-blog.csdnimg.cn/20210315141411855.png)
所以需要这样写：
```java
class Chinese extends Person {
    constructor(name, age) {
        super(name, age);
    }
}
```
那么如何使用子类独有的字段呢？

```js
class Chinese extends Person {
    constructor(name, age, IDNo) {
        super(name, age);
        this.IDNo = IDNo;
    }

}

const c1 = new Chinese('Java', 18, '123*****');
```
![](https://img-blog.csdnimg.cn/20210315142445112.png)