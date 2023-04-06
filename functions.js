// let num = 20;
// // function showFirstMassage (text) {
// //     alert (text);
// //     let num = 10;
// //     console.log(num);
// // };
// // showFirstMassage("hello");
// // console.log(num);
// //ниже функция действует по всему коду, не имея разницы в каком месте кода ее обьявили
// //     function declaration 
// function calc(a, b) {
//     return (a + b);
// };
// console.log(calc(4, 4));

// console.log(calc(4, 6));

// function retVar () {
//     let num = 50;
//     return num;
// };

// let anotherNum = retVar();
// console.log(anotherNum)

// //но если надо когда функция выполнялась в определенном месте кода нужно:
// let calca = function(a, b) {
//     return (a + b)
// };
// console.log(calc(4, 4));

// console.log(calc(4, 6));

//по новому стандарту так можно записать функцию
let calc = (a, b) => a+b //если большое выражение то  ставим "{}"
console.log(calc(4, 4));

console.log(calc(4, 6));

let str = "test";
console.log(str.length);

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.charAt(), "first letter")
console.log(str.charCodeAt())
console.log(str.codePointAt())
console.log(str.concat(), "concat")
console.log(str.includes())

let twelve = "12.2px";
// console.log(Math.round(twelve)); округляет
console.log(parseInt(twelve));//преобразует в число без букв и округляет,
//откинули все после точки
console.log(parseFloat(twelve))//оставляет 12.2