// Добавление поиска на всем окне
window.addEventListener('touchstart', function (event) {            //touchstart - событие касания (для моб. устройств)

    let counter;

    // Касание было по кнопке "+" или "-"?
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        
        // Поиск обертки счетчика
        const counterWrapper = event.target.closest('.items_counter-wrapper');

        // Поиск счетчика внутри обертки
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }
    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 0) {
            counter.innerText = --counter.innerText;
        }
    }
});
