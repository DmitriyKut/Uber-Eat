//Отслеживает ввод данных в строке поиска
document.querySelector('#searchRest').oninput = function() {
    //Отчищает результат поиска
    while (document.querySelector('.finded')) {
        document.querySelector('.finded').remove();
    }    
    //Значение, которое ввел пользователь в нижнем регистре
    let val = this.value.trim().toLowerCase();
    //Поиск карточек ресторанов
    let finded = document.querySelectorAll('.restoran');
    //Если введены данные, осуществляется поиск подстроки в названии ресторанов, совпадающих с введенными данными
    if (val != '') {
        finded.forEach(function(elem) {
            if (elem.innerText.toLowerCase().search(val) != -1) {
                //Поиск ссылки на страницу ресторана
                const src = elem.closest('.text');
                const content ='<div class="finded"><a href="'+src+'" class="text">'+elem.innerText+'</a></div>' + "\n";
                //Вывод совпадений
                document.querySelector('.find').insertAdjacentHTML('AfterEnd', content);   
            }
        });
    }
}
//Отчищает ввод после ухода со страницы
window.addEventListener('beforeunload', function() {
    document.querySelector('.search-box').innerText = '';
});