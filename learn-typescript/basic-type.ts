// let isDone: Boolean = true

// let age: number = 20

// let binaryNumber: number = 0b1111

// let firstName: string = '施正阳'

// let message:string = `Hello, ${firstName}, age is ${age}`

console.log(message, "message")

let  a: undefined = undefined

let b: null = null

let num:number  = undefined

// undefined 和 null 是所有数据类型的子类型

let notSure: any = 4
notSure = "shizhengyang"

notSure.myName
notSure.getName()

let arrOfNumbers: number[] = [1,2,3,4];

arrOfNumbers.push(4);

let nums:Number = 5

// 元组 Tuple 集合不同类型的数组

let user: [string, number] = [ "1", 5];

// 函数是一等公民可以当做输入输出

// 函数声明写法
function add(x: number, y: number, z?: number): number {
  if (typeof z === "number") {
    return x + y + z 
  } else {
    x + y
  }
}

let result = add (2, 3, 5);

// 怎么实现可选参数 在参数上加上一个问号？ 如上所示，但是可选参数不能放确定参数 就是有？  的后面不能跟没有问号的

let string = "str"

// str = 123;

// 类型推论 typescript会在我们没有说明问题的时候给我们一些帮助。

//  函数由两部分构成，输入和输出

// 类是定义了一切事物的抽象特点

// 对象是类的实例

// 面向对象三大特性，封装，继承，多态

// 封装是不需要知道具体细节就可以通过接口拿到

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is runn ing`
  }
}

const snake = new Animal('luxiang');

console.log(snake.run);

