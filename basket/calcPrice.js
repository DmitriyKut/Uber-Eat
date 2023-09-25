function calcPrice() {
    const cartItems = document.querySelectorAll('.card_info');
    const totalPriceEl = document.querySelector('.sum');
    let totalPrice = 0;
    //Поиск всех блоков .card_info на странице и расчет стоимости заказа
    cartItems.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price');
        //Для цены используется регулярное выражение (replace) для выделения только чисел из блока "цена"
        //Далее содержимое переводится в текст, после чего в Int
        //В итоге колличество заказанных товаров умножается на их цену
        //Цикл проводится для каждого найденного .card_info на странице
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText.replace(/[^0-9]/g,""));
        if (currentPrice > 0) {
            totalPrice += currentPrice;
        }
    })
    totalPriceEl.innerText = 'Итого: ' + totalPrice + '\u20BD';
}