"use strict";
// //Tipos
// let typeOfData1: number = 15;
// let typeOfData2: string = 'String';
// //Arrays
// let heroes: string[] = ['Spider Man', 'Super Man', 'Batman'];
// // console.log(typeof heroes);
// heroes.push('Captain Marvel');
// // console.log(heroes)
// //Tuplas
// let birthday: [string, number] = ['Algust' ,21 ]
// console.log(typeof birthday);
// //Enum
// enum Cor {
//     gray,
//     green,
//     blue,
// }
// let minhaCor: Cor = Cor.green;
// console.log(minhaCor)
// //Any
// let car: any = 'Bmw';
let name1 = 'Juni de souza';
function sayName() {
    return name1;
}
console.log(sayName());
function birthday(birthYear, currentYear) {
    return currentYear - birthYear;
}
console.log(birthday(1996, 2022));
