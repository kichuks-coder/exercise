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
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    //isNan возвращает true когла туда попадают не цифры
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
};
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: 1
};

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            // while (i < 2) {
            //     i++;
            //     a = prompt("Введите обязательную статью расходов в этом месяце", '');
            //     b = prompt("Во сколько обойдется?", '');
            //     console.log("done1");
            //     appData.expenses[a] = b;
            // }
            // i -= 1;
            i = i - 1;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
};

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка")
    } else {
        console.log("Произошла ошибка")
    };
};
detectLevel();

function checSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checSavings();

function chooseOptExpenses() {
    for (i = 1; i <= 3; i++) {
        let a = prompt('Статья необязательных расходов?');
    
    switch (i) {
        case 1:
            appData.optionalExpenses[0] = "1:" + a;
            console.log("case1");
            break
        case 2:
            appData.optionalExpenses[1] = "2:" + a;
            console.log("case2");
            break;
        case 3:
            appData.optionalExpenses[2] = "3:" + a;
            console.log("case3");
            break;

    };
    };
};
chooseOptExpenses();

