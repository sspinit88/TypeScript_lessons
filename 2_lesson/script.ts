// string
let myName: string = 'Max';


// number
let myAge: number = 28;


// boolean
let hasHobbies: boolean = true;


// array
let hobbies: any[] = ['photo', 'cooking', 'sports'];


// tuples
let addres: [string, number] = ['super!', 99];


// enums - тип для определения различных констант (числовые)
enum Color {
  Grey, // 0
  Green, // 1
  Red = 200, // 200
  Yellow, // 201
  Blue // 202
}


let anyColor: Color = Color.Red;
// console.log(anyColor);


// functions (): тип_возвращаемого
function returnMyName(): string {
  return myName;
}

// console.log(returnMyName());


// void  - этот тип, которит, что функция ничего не возвращает
function sayHello(): void {
  console.log('Hello');
  // return myName;
}

// sayHello();


// arguments type
function nu(value1: number, value2: number): number {
  return value1 * value2;
}

// nu(1, 2);


// function types - приведеной ниже записью можно указать какие функции можно использовать (по входящим и
// возврощающимся параметрам, их типам).
let myMultiplay: (v1: number, v2: number) => number;
// myMultiplay = sayHello;
// myMultiplay();
myMultiplay = nu;
// console.log(myMultiplay(1, 2));


// objects
// в объекте порядок может меняться, но наименование должно быть строго соблюдено, к нему привязывается тип.
let userData: { name: string, age: number } = {
  name: 'Max',
  age: 27,
};
// console.log(userData);


// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [5, 8, 7],

  output: function (all: boolean): number[] {
    return this.data;
  }
};
// console.log(complex);

// создание псевдонима типа.
// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [5, 8, 7],

  output: function (all: boolean): number[] {
    return this.data;
  }
};


// union types. Использование нескольких типов.
// тут переменная или число, или строка.
let myRealyAge: number | string = 27;
myRealyAge = '27';


// type never - для функций, которые никогда не заканчиваются.
function neverTest(): never {
  throw new Error('any message.')
}


// Nullable Types (обнуляемые типы)
let canBeNull: number | null = 13;
canBeNull = null;
// console.log(canBeNull);
let canAlsoBeNull;
canAlsoBeNull = null;
// console.log(canAlsoBeNull);
let canThisBeAny: number | null = null;
canThisBeAny = 12;
// console.log(canThisBeAny);
