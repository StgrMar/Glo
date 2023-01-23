let title = 'Калькулятор';
let screens = 'Простые, Сложные, интерактивные';
let screenPrice = 100;
let rollback = 90;
let fullPrice = 500;
let adaptive = true;
let service1 = 'any';
let service2 = 'many';
let servicePrice1 = 100;
let servicePrice2 = 100;
let servicePercentPrice;
let percent;

title = prompt(' как называется ваш проект?', 'Калькулятор');
screens = prompt(' Какик типы экранов нужно разработать?', 'сложные');
screenPrice = +prompt(' Сколько будет стоить данная работа?');
adaptive = confirm(' Нужен ли адаптив на сайте?');
service1 = prompt(' Какой дополнительный тип услуги нужен?', 'развертка');
servicePrice1 = +prompt(' Сколько будет стоить данная работа?');
service2 = prompt(' Какой дополнительный тип услуги нужен?', 'отвертка');
servicePrice2 = +prompt(' Сколько будет стоить данная работа?');
fullPrice = screenPrice + servicePrice1 + servicePrice2;

if (fullPrice > 30000) {
    console.log(' даем скидку в 10%');
    percent = 0.1 * fullPrice; 
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
    console.log(' даем скидку в 5%');
    percent = 0.05 * fullPrice;
} else if (fullPrice > 0 && fullPrice < 15000) {
    console.log( ' скидка не предусмотрена');
    percent = 0 * fullPrice;
} else {
    console.log(' Что-то пошло не так :(')
    };

servicePercentPrice = fullPrice - percent;

    console.log('Название проекта : ' + title);
    console.log('Типы экранов : ' + screens);
    console.log('Цена за работу : ' + screenPrice);
    console.log('Нужен ли адаптив : ' + adaptive);
    console.log('Услуга1 : ' + service1);
    console.log('Услуга1 цена : ' + servicePrice1);
    console.log('Услуга2 : ' + service2);
    console.log('Услуга2 цена : ' + servicePrice2);
    console.log('Цена общая : ' + fullPrice);
    console.log('Итоговая стоимость : ' + Math.ceil(servicePercentPrice));

    alert('Итоговая цена : ' + servicePercentPrice + '. ');


