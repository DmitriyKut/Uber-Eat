//Ищем шаблон карточки
const cartWrapper = document.querySelector('.card_content');

//Добавляем карточки со страницы магазина после шаблона
cartWrapper.insertAdjacentHTML('AfterEnd', localStorage.getItem('want'));