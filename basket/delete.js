//Ищем шаблон карточки
const cartWrapper = document.querySelector('.card_content');

//Добавляем карточки со страницы магазина после шаблона
cartWrapper.insertAdjacentHTML('AfterEnd', localStorage.getItem('want'));

//Получение колличества заказанных наименований товаров
let statusBascket = localStorage.getItem('status');
const managingEmptyBusket = document.querySelector('[data-emptyBasket]');

//Проверка и скрытие надписи "Корзина пуста"
if (statusBascket > 0) {
    managingEmptyBusket.classList.add('none');
}
//Расчет стоимости заказа
calcPrice();

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
        //Изменение стоимости заказа
        calcPrice();
    }
});

window.addEventListener('click', function(event) {
    //Было нажатие на кнопки "Добавить/убавить товар"?
    if (event.target.hasAttribute('data-action')) {
        //Изменение стоимости заказа
        calcPrice();
    }
});

//Создаем хранилище с данными карточек товаров, добавленных в корзину
localStorage.setItem('revers', cartWrapper);

 // Передаем хранилище на страницу с корзиной
 window.unload = function() {
 document.location.href = '../restaurants/index.html';
 };
