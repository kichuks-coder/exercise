// let money = +prompt("Ваш бюджет на месяц?");
// let time = +prompt("Введите дату в формате YYYY-MM-DD");
// let timeData = time;
// let answer1, answer2;
// answer1 = +prompt("Введите лбязательную статью расходов на этот месяц");
// answer1 = +prompt("Введите лбязательную статью расходов на этот месяц");
// answer2 = +prompt("Во сколько обойдется?");
// answer2 = +prompt("Во сколько обойдется?");
// let expenses = {"answer1":"answer2"};
// // console.log(appData);
// let optionalExpenses = {};
// let income = [];
// let savings = false;
// let appData = {money, timeData, expenses, optionalExpenses, income};
// alert(money/30)

let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        while (i < 2) {
            i++;
            a = prompt("Введите обязательную статью расходов в этом месяце", '');
            b = prompt("Во сколько обойдется?", '');
            console.log("done1");
            appData.expenses[a] = b;
        }

    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка")
} else {
    console.log("Произошла ошибка")
}