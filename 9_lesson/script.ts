function logged(constructorFn: Function) {
  console.log(constructorFn);
}


@logged
class Person {
  constructor() {
    console.log('hi!');
  }
}

// factory
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Car {
  constructor() {
    console.log('this is a car!');
  }
}

// Advanced
function printer(constructorFn: Function) {
  constructorFn.prototype.print = function () {
    console.log(this);
  }
}

@printer
class Plant {
  name = 'Green';
}

const pl = new Plant();
<any>pl.print();

// Method Decorator
class Project {
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  calc() {
    console.log(1000);
  }
}

const project = new Project('Super');
project.calc();
project.calc() = function () {
  console.log('5000');
};


