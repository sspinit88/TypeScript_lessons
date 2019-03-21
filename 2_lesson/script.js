"use strict";
// string
var myName = 'Max';
// number
var myAge = 28;
// boolean
var hasHobbies = true;
// array
var hobbies = ['photo', 'cooking', 'sports'];
// tuples
var addres = ['super!', 99];
// enums - тип для определения различных констант (числовые)
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Red"] = 200] = "Red";
    Color[Color["Yellow"] = 201] = "Yellow";
    Color[Color["Blue"] = 202] = "Blue"; // 202
})(Color || (Color = {}));
var anyColor = Color.Red;
// console.log(anyColor);
// functions (): тип_возвращаемого
function returnMyName() {
    return myName;
}
// console.log(returnMyName());
// void  - этот тип, которит, что функция ничего не возвращает
function sayHello() {
    console.log('Hello');
    // return myName;
}
// sayHello();
// arguments type
function nu(value1, value2) {
    return value1 * value2;
}
// nu(1, 2);
// function types - приведеной ниже записью можно указать какие функции можно использовать (по входящим и
// возврощающимся параметрам, их типам).
var myMultiplay;
// myMultiplay = sayHello;
// myMultiplay();
myMultiplay = nu;
// console.log(myMultiplay(1, 2));
// objects
// в объекте порядок может меняться, но наименование должно быть строго соблюдено, к нему привязывается тип.
var userData = {
    name: 'Max',
    age: 27,
};
// console.log(userData);
// complex object
var complex = {
    data: [5, 8, 7],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [5, 8, 7],
    output: function (all) {
        return this.data;
    }
};
// union types. Использование нескольких типов.
// тут переменная или число, или строка.
var myRealyAge = 27;
myRealyAge = '27';
// type never - для функций, которые никогда не заканчиваются.
function neverTest() {
    throw new Error('any message.');
}
// Nullable Types (обнуляемые типы)
var canBeNull = 13;
canBeNull = null;
// console.log(canBeNull);
var canAlsoBeNull;
canAlsoBeNull = null;
// console.log(canAlsoBeNull);
var canThisBeAny = null;
canThisBeAny = 12;
// console.log(canThisBeAny);
//# sourceMappingURL=script.js.map