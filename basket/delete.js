//Получение колличества заказанных наименований товаров
let statusBascket = localStorage.getItem('status');
const managingEmptyBusket = document.querySelector('[data-emptyBasket]');

//Проверка и скрытие надписи "Корзина пуста"
if (statusBascket > 0) {
    managingEmptyBusket.classList.add('none');
}

//Функция удаления товаров из корзины
window.addEventListener('click', function(event) {

    //Было нажатие на кнопку "Удалить товар"?
    if (event.target.hasAttribute('data-delete')) {

        //Поиск и удаление карточки товара, которую хотят удалить из корзины
        event.target.closest('.card_content').remove();
        statusBascket--;

        //Проверка и появление надписи "Корзина пуста"
        if (statusBascket < 1) {
            $('.noneItems').removeClass('none');
        }
    }
});