"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person = /** @class */ (function () {
    function Person() {
        console.log('hi!');
    }
    Person = __decorate([
        logged,
        __metadata("design:paramtypes", [])
    ], Person);
    return Person;
}());
// factory
function logging(value) {
    return value ? logged : null;
}
var Car = /** @class */ (function () {
    function Car() {
        console.log('this is a car!');
    }
    Car = __decorate([
        logging(true),
        __metadata("design:paramtypes", [])
    ], Car);
    return Car;
}());
// Advanced
function printer(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = 'Green';
    }
    Plant = __decorate([
        printer
    ], Plant);
    return Plant;
}());
var pl = new Plant();
pl.print();
// Method Decorator
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calc = function () {
        console.log(1000);
    };
    return Project;
}());
var project = new Project('Super');
project.calc();
//# sourceMappingURL=script.js.map