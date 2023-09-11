window.addEventListener('click', function(event) {

    //Было нажатие на кнопку "Удалить товар"?
    if (event.target.hasAttribute('data-delete')) {

        //Поиск и удаление карточки товара, которую хотят удалить из корзины
        event.target.closest('.card_content').remove();
    }
});