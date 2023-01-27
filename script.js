'use strict'
let title = prompt(' как называется ваш проект?', '  кАлькУлЯтор Верстки');
let screens = prompt(' Какик типы экранов нужно разработать?', 'сложные');
let screenPrice = +prompt(' Сколько будет стоить данная работа?', 25000);
let rollback = 10;
let adaptive = confirm(' Нужен ли адаптив на сайте?');
let service1 = prompt(' Какой дополнительный тип услуги нужен?', 'развертка');
let servicePrice1 = +prompt(' Сколько будет стоить данная работа?', 2500);
let service2 = prompt(' Какой дополнительный тип услуги нужен?', 'отвертка');
let servicePrice2 = +prompt(' Сколько будет стоить данная работа?', 3500);
// let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice;
let percent;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

// тип function-expression
const getAllServicePrices = function (sP1, sP2) {
    return sP1 + sP2;
};

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

// тип function-declaration
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
};

const fullPrice = getFullPrice(screenPrice, allServicePrices);

// Объявить функцию getTitle. Функция возвращает title меняя его таким образом: 
// первый символ с большой буквы, остальные с маленькой". Учесть вариант что строка может начинаться с пустых символов." КаЛьКулятор Верстки"
const getTitle = function(title) {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};
//trim() позволяет удалить пробелы с обоих концов строки, затем Нулевой индекс переводит на высокий регистр благодяра toUpperCase() 
//substr() позволяет извлечь из строки определенное количество символов, начиная с заданного индекса. Получается, что начиная
//с 1го индекса все остальные символы будут прописываться с низким регистром. Второй trim() нужен чтобы тоже удалить все пробелы
// первый трим для второго слагаемого не действует

const getRollbackMessage = function(price) {
    if (price > 30000) {
        percent = 0.1 * price;
        return 'даем скидку в 10%';
    } else if (price >= 15000 && price <= 30000) {
        percent = 0.05 * price;
        return 'даем скидку в 5%';
    } else if (price > 0 && price < 15000) {
        percent = 0 * price;
        return ' скидка не предусмотрена';
    } else {
        return ' Что-то пошло не так :(';
        };
    
};

const getServicePercentPrices = function(servicePercentPrice) {
    return fullPrice - percent;
};

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
    console.log(getRollbackMessage(fullPrice));
    console.log('Название проекта : ' + getTitle(title));
    console.log('Типы экранов : ' + screens);
    console.log('Цена за работу : ' + screenPrice);
    console.log('Нужен ли адаптив : ' + adaptive);
    console.log('Услуга1 : ' + service1);
    console.log('Услуга1 цена : ' + servicePrice1);
    console.log('Услуга2 : ' + service2);
    console.log('Услуга2 цена : ' + servicePrice2);
    console.log('Цена общая : ' + fullPrice);
    console.log('Итоговая стоимость : ' + Math.ceil(getServicePercentPrices(servicePercentPrice)));

    alert('Итоговая цена : ' + Math.ceil(getServicePercentPrices(servicePercentPrice)) + '. ');


