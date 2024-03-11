"use strict";

/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/

const positive = inputVariable("Введите положительное число");
const negative = inputVariable("Введите отрицательное число");

if (positive >= 0 && negative < 0) {
    console.log("Все значения верные.");
} else console.log("Одно или более значений некорректно.");

console.log(`Положительное число = ${positive}, 
Отрицательное число = ${negative}`);

console.log(positive, negative);

function inputVariable(data) {
    while (true) {
        let number = inputNumber(data);
        if (!isNaN(number)) {
            return +number;
        }
        console.log("Ошибка, введите число!");
    }
}

function inputNumber(data) {
    return prompt(data);
}
