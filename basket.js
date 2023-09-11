let cartItemHTML = new Array();
let infoId = new Array();
let infoCounter = new Array();
let ch_for = 0;
let ch_enter = 0;
let repeat = -1;
const wrapper = document.querySelector('.card_content');

window.addEventListener('click', function(event) {

    //Было нажатие на кнопку "Добавить в корзину"?
    if (event.target.hasAttribute('data-cart')) {
        
        //Поиск карточки товара, которую хотят добавить в корзину
        const card = event.target.closest('.card_content');
        
        //Сбор данных о товаре в объект "productInfo"
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.picture').getAttribute('src'),
            title: card.querySelector('.food').innerText,
            price: card.querySelector('.price').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }
        //Цикл запоминает id заказанных товаров и их колличество, а у повторяющихся товаров складывается counter и товар не дублируется
        infoId[ch_for] = productInfo.id;
        infoCounter[ch_for] = productInfo.counter;
        ch_for = ch_for + 1;

        for (let i = 0; i < ch_for ; i++) {
          for (let j = i + 1; j < ch_for; j++) {
            if (infoId[i] === infoId[j]) {
              infoCounter[i] = Number(infoCounter[i]) + Number(infoCounter[j]);
              infoId.length = ch_for - 1;
              infoCounter.length = ch_for - 1;
              ch_for--;
              //repeat = порядку товара, который заказан повторно
              repeat = i;
            }
          }
        }

        if (repeat === -1 && productInfo.counter != 0) {
          //Собранные данные подставлены в шаблон корзины
          cartItemHTML[ch_enter] = 
          `<div class="card_content" data-id="${productInfo.id}">
            <div class="card_info">
              <div class="food">${productInfo.title}</div>
              <div class="price"><b>${productInfo.price}</b></div>
              <div class="items_counter-wrapper">
                <div class="items_control" data-action="minus">&#8722;</div>
                <div class="items_current" data-counter>${productInfo.counter}</div>
                <div class="items_control" data-action="plus">+</div>
              </div>
              <button data-delete type="button" class="delete">Удалить товар</button>
            </div>
          <img src="../restaurants/${productInfo.imgSrc}" width="170" height="160" class="picture"/>
          </div>`;
          ch_enter++;
        } else {
          //Заменяем counter товара, котоый заказан повторно
          cartItemHTML[repeat] = 
          `<div class="card_content" data-id="${productInfo.id}">
            <div class="card_info">
              <div class="food">${productInfo.title}</div>
              <div class="price"><b>${productInfo.price}</b></div>
              <div class="items_counter-wrapper">
                <div class="items_control" data-action="minus">&#8722;</div>
                <div class="items_current" data-counter>${infoCounter[repeat]}</div>
                <div class="items_control" data-action="plus">+</div>
              </div>
              <button data-delete type="button" class="delete">Удалить товар</button>
            </div>
          <img src="../restaurants/${productInfo.imgSrc}" width="170" height="160" class="picture"/>
          </div>`;
          repeat = -1;
        }

        console.log(cartItemHTML);

        //Создаем хранилище с данными карточек товаров, добавленных в корзину
        localStorage.setItem('want', cartItemHTML.join(''));
    }
  // Передаем хранилище на страницу с корзиной
  if (event.target.hasAttribute('data-shop')) {
    document.location.href = '../basket/index.html';
    }
})