// interface

// typescript 中的接口非常灵活，对object的shape进行描述

// 对类进行抽象

// Duck Typing（鸭子类型）

interface Person {
  name: string;
  age?: number;
  readonly id: number;
}

// readonly加在前面表示只读属性

// 加？表示可有可无

let stone: Person = {
  id: 1234,
  name: "施正阳",
  age: 21
}

// const是用在变量的，readonly是用在属性上的。



