"use strict"; //не позволяет variables без var, const, let работать
            //таким образом не будет ошибок
let number = 5; //изменяемая цифра
const leftBorderWidth = 1; //неизменяемая константа

const obj = {
    a: 50
};

obj.a = 10;

var name = 'Ivan'; //лучше не использовать, могут быть ошибки

{
    let result = 50;
    var frog = 50;
}
console.log(result); //не выводит за скобками
console.log(frog); //выводит за скобками

//ways to write variables

//snake_case (folders and files, not variables)
//UPPER_SNAKE_CASE (const variables)
//_constCamelCase
//Kebab-case
//camelCase
//PascalCase (for folders)

let storeName = 'Vara';

const storeDescription = {
    budget: 100000,
    employees: ['John', 'Kyle', 'Nathan'],
    products: {
        apple: 15,
        carrot: 30,
    },
    open: true
};