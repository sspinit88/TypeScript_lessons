"use strict";
// Дженерики
function echo(data) {
    return data;
}
// console.log(echo(98));
// better Generic
function better(data) {
    return data;
}
// console.log(better('test'));
// console.log(better<number>(25));
// console.log(better({name: 'one', val: 15}));
// встроенные универсальные типы
var testRes = [1.98, 2.33];
testRes.push(15);
// testRes.push('27');
// console.log(testRes);
// Array
function printAll(args) {
    return args.forEach(function (element) { return console.log(element); });
}
// printAll<string>(['apple', 'test']);
// generic type
// const echo2: <T>(data: T) => T = better;
// создание общего generic
// указываем какие базовые типы должны наследоваться
/*
class Tester<T extends number | string, U extends number | string> {
  val: U;
  multi: T;

  calc(): number {
    return +this.val * +this.multi;
  }
}

const simple = new Tester<string, number>();
simple.val = 10;
simple.multi = '30';
console.log(simple.calc());
*/
//# sourceMappingURL=script.js.map