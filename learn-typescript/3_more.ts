// 类型断言
type PlusType = (x:number, y:number) => number
// 这里前面是输入，后面是输出
// type aliases
function sums (x: number, y:number): number {
  return x + y;
}

const sum2:PlusType = sums;

type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName (n: NameOrResolver): string {
  if (typeof n === "string") {
    return n
  } else {
    return n()
  }
}

// 类型断言

// 当ts不知道类型属于联合类型的哪一种时
function getLength(input: string | number): number {
  // const str = input as String
  // if (str.length) {
  //   return str.length
  // } else {
  //   const number = input as Number
  //   return number.toString().length
  // }
  if((<string>input).length) {
    return (<string>input).length
  } else {
    return input.toString().length
  } 
}