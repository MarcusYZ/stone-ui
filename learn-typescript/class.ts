class Animal {
  protected name: string;
  static categoies: string[] = ['mammal', 'bird']
  static isAnimal(a) {
    return a instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  // public就表示可以随意访问，但是有些属性是不愿意被随意访问的就可以用private  
  // private只能在本类中访问。
  // 如果只想被子类访问就是protected
  // 如果希望属性只能读不能写 就用 readonly 
  // 类上面有没有可以直接访问的属性或者方法呢

  run() {
    return `${this.name} is running`
  } 
}
console.log(Animal.categoies);
const snake = new Animal('luxiang');

console.log(Animal.isAnimal(snake))



class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}
const xiaobao = new Dog('xiaobao');
console.log(xiaobao.run())
console.log(xiaobao.bark())

class Cat extends Animal {
  constructor(name) {
    super(name) 
    console.log(this.name)
  } //构造函数， this指向对象。 对象.name 就是 maomao
  run() {
    return "meow, " + super.run()
  }//重写方法
}
const maomao  = new Cat('maomao')
console.log(maomao.run());

// cat类中我们完成了类的重写x 

// 修饰符 我们需要给类的方法和属性做权限管理，这就有了修饰符，有三种，一种是public， 一种是private，另一种是

// public 在任何时候都可以访问 

interface Radio {
  switchRadio(triggel: boolean): void;
}
interface Battery extends Radio {
  checkBatteryStatus ();
}

class Car implements Radio {
  switchRadio() {

  }
}

class Cellphone implements  Battery {
  switchRadio() {

  }
  checkBatteryStatus() {

  }
}
// 当我们要实现两个接口的时候就可以用,隔开。


