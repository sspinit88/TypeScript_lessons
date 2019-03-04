// string
let myName: string = 'Max';

// number
let myAge: number = 28;

// boolean
let hasHobbies: boolean = true;

// array
let hobbies: any[] = ['photo', 'cooking', 'sports'];

// tuples
let addres: [string, number] = ['super!', 99 ];

// enums - тип для определения различных констант (числовые)
enum Color {
  Grey, // 0
  Green, // 1
  Red = 200, // 200
  Yellow, // 201
  Blue // 202
}

let anyColor:Color = Color.Red;
// console.log(anyColor);
