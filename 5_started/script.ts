class Person {
  public name: string;
  // Если к свойствам и методам применяется модификатор private, то к ним нельзя будет обратиться извне при создании объекта данного класса.
  private type: string;
  // Модификатор protected во многом аналогичен private - свойства и методы с данным модификатором не видны извне,
  // но к ним можно обратиться из классов-наследников
  protected age: number = 28;

  constructor(
      name: string,
      public userName: string,
  ) {
    this.name = name;
    // this.age = 30;
    this.type = 'type';
  }

  printAge() {
    console.log(this.age);
  }

  setType(type: string) {
    this.type = type;
    console.log(this.type);
  }

}

const person = new Person('Sergey', 'human');
console.log(person.name, person.userName);
person.printAge();
person.setType('ease');

// наследование классов
// наследование проводится с помощью  extends
class newMan extends Person {
  // name = 'Elena';

  constructor(userName: string) {
    // super - вызывает конструктор родительского класса.
    super('Elena!', userName);
    this.age = 30;
  }
}

const elena = new newMan('max');
console.log(elena);

// геттеры и сеттеры
class Plant {
  private _species: string = 'Default';

  get species() {
    return 'Hello! ' + this._species;
  }

  set species(val: string) {
    if (val.length > 3) {
      this._species = val;
    }
    else {
      this._species = 'Default';
    }
  }
}

let plant = new Plant();
// console.log(plant.species);
plant.species = "Abcde";
// console.log(plant.species);


// статические методы и свойства в классе
class Helpers {
  // возможно сделать доступным PI буз объявления нового класса Helpers
  static PI: number = 3.14;

  static calcCircumference(diamter: number): number {
    return diamter * this.PI;
  }
}

console.log(5 * Helpers.PI);
console.log(Helpers.calcCircumference(5));

// абстрактные классы
// является обязательной надстройкой для дочерних классов
abstract class Pjt {
  pjtName: string = 'default';
  budget: number = 500;

  // только определяем как должна выглядеть функция / метод, возвращаемый тип
  // но не реализуем логику
  abstract changeName(name: string) :void

  calcBudget() {
    return this.budget * 2;
  }
}

class itPjt extends Pjt {
  changeName(name: string): void {
    this.pjtName = name;
  }

}
let newP = new itPjt();
console.log(newP);
newP.changeName('super!');
console.log(newP);


//
class OnlyOne  {
  private static instance: OnlyOne;

  private constructor(
      // readonly - изменить можно будет только из класса, извне нельзя
      public readonly name: string
  ) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('the only one!')
    }
    return OnlyOne.instance
  }
}
// вызвать можно только:
let right = OnlyOne.getInstance();
console.log(right.name);
