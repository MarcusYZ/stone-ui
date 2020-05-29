enum Direction {
  up = "up",
  dowm = "down",
  left = "left",
  right= "right"
}

// 1、枚举成员会自动从0开始取值
console.log(Direction.up);

// 2、 枚举也可以当做数组来取值
console.log(Direction["up"]);

// 3、当给枚举赋值后0就取不到值了

console.log(Direction[0]);

// 4、常量枚举，只有常量值可以带来常量枚举，计算值不可以



