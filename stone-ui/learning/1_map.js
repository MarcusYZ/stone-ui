function Dad(name, age) {
  this.name = name;
  this.age = age;
  this.money = "10000";
}

function Son(name,age) {
  Dad.call(this,name,age);
}

let  zhangsan = new Son("张三", 20)
