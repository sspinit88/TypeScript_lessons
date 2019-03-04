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
//# sourceMappingURL=script.js.map