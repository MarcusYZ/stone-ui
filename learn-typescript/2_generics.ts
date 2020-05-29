// 1、泛型出现的动机：
function echo(arg: any): any {
  return arg  
}
// 传入是any，返回是any
let results: string = echo(123) 

// 我们传入的数字返回的应该是数字， 如果我们传入是数字，想返回的时候指定类型

function echo2 <T>(arg: T): T {
  return arg;
}
// T是一种习惯性的写法，相当于创建了一个占位符，它可以是任意类型，使用的时候指定即可

const result2 = echo2('123')
// 2、我们想要给泛型传入多个值 

function swap <T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result3 = swap(['string', 123])
console.log(result3);
// 这里有几个参数就要设置几个类型，且类型和返回值类型的顺序一致

// 因为是泛型，所以我们不能随意得操作变量
function echoWithArr<T>(arg: T[]):T[] {
  console.log(arg.length)
  return arg
}

const arrs = echoWithArr([1, 2, 3]);
interface IwithLength {
  length: number
}
function echoWithLength <T extends IwithLength>(arg: T):T {
  console.log(arg.length)
  return arg
}

echoWithLength('str')
const str1 = echoWithLength('str')
const str2 = echoWithLength({length: 10, width: 20})
const str3 = echoWithLength([1,2,3]);

// 这里不管你是什么类型，只要有length属性就可以

// echoWithLength(13); 

// 这里泛型约束就表示一定要有length属性

// 3、 泛型在类和接口中的使用

class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>() 
queue.push(1);
console.log(queue.pop().toFixed())

// 如果我们想要无论什么类型被推入队列，被推出的队列都和推入的一致

const queue2 = new Queue<string>()

queue2.push('str')
console.log(queue2.pop())

interface KeyPair<T, U> {
  key: T,
  value: U,
}
let  ke1 : KeyPair <number, string> = {key: 123, value: "str"}
let  ke2: KeyPair <string, number> = {key: "str", value: 123 }

let arr:number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

// 泛型接口
interface Iplus<T> {
  (a: T, b:T): T
}
function pluss(a: number, b:number): number {
  return a+b
}
function connect(a: string, b:string): string {
  return a + b
}
const as: Iplus<number>  = pluss
const bbb: Iplus<string> = connect
