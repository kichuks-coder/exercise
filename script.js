let money = +prompt("Ваш бюджет на месяц?");
let time = +prompt("Введите дату в формате YYYY-MM-DD");
let timeData = time;
let answer1, answer2;
answer1 = +prompt("Введите лбязательную статью расходов на этот месяц");
answer1 = +prompt("Введите лбязательную статью расходов на этот месяц");
answer2 = +prompt("Во сколько обойдется?");
answer2 = +prompt("Во сколько обойдется?");
let expenses = {"answer1":"answer2"};
// console.log(appData);
let optionalExpenses = {};
let income = [];
let savings = false;
let appData = {money, timeData, expenses, optionalExpenses, income};
alert(money/30)