let cartItemHTML;

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

        //Собранные данные подставлены в шаблон корзины
        cartItemHTML = cartItemHTML + `
        <div class="card_content" data-id="${productInfo.id}">
          <div class="card_info">
            <div class="food">${productInfo.title}</div>
            <div class="price"><b>${productInfo.price}</b></div>
            <div class="items_counter-wrapper">
              <div class="items_control" data-action="minus">&#8722;</div>
              <div class="items_current" data-counter>${productInfo.counter}</div>
              <div class="items_control" data-action="plus">+</div>
            </div>
          </div>
        <img src="../restaurants/${productInfo.imgSrc}" width="170" height="160" class="picture"/>
        </div>`;
        localStorage.setItem('want', cartItemHTML);
    }

  if (event.target.hasAttribute('data-shop')) {
    document.location.href = '../basket/index.html';
    }
})