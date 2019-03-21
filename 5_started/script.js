"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        // Модификатор protected во многом аналогичен private - свойства и методы с данным модификатором не видны извне,
        // но к ним можно обратиться из классов-наследников
        this.age = 28;
        this.name = name;
        // this.age = 30;
        this.type = 'type';
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Sergey', 'human');
console.log(person.name, person.userName);
person.printAge();
person.setType('ease');
// наследование классов
// наследование проводится с помощью  extends
var newMan = /** @class */ (function (_super) {
    __extends(newMan, _super);
    // name = 'Elena';
    function newMan(userName) {
        var _this = 
        // super - вызывает конструктор родительского класса.
        _super.call(this, 'Elena!', userName) || this;
        _this.age = 30;
        return _this;
    }
    return newMan;
}(Person));
var elena = new newMan('max');
console.log(elena);
// геттеры и сеттеры
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return 'Hello! ' + this._species;
        },
        set: function (val) {
            if (val.length > 3) {
                this._species = val;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
// console.log(plant.species);
plant.species = "Abcde";
// console.log(plant.species);
// статические методы и свойства в классе
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diamter) {
        return diamter * this.PI;
    };
    // возможно сделать доступным PI буз объявления нового класса Helpers
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(5 * Helpers.PI);
console.log(Helpers.calcCircumference(5));
// абстрактные классы
// является обязательной надстройкой для дочерних классов
var Pjt = /** @class */ (function () {
    function Pjt() {
        this.pjtName = 'default';
        this.budget = 500;
    }
    Pjt.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Pjt;
}());
var itPjt = /** @class */ (function (_super) {
    __extends(itPjt, _super);
    function itPjt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    itPjt.prototype.changeName = function (name) {
        this.pjtName = name;
    };
    return itPjt;
}(Pjt));
var newP = new itPjt();
console.log(newP);
newP.changeName('super!');
console.log(newP);
//
var OnlyOne = /** @class */ (function () {
    function OnlyOne(
    // readonly - изменить можно будет только из класса, извне нельзя
    name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('the only one!');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// вызвать можно только:
var right = OnlyOne.getInstance();
console.log(right.name);
//# sourceMappingURL=script.js.map