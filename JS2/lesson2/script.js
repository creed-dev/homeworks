class ApiMock {
	constructor() {}

	fetch() {
		return [
			{ title: 'Shirt', price: 150 },
			{ title: 'Socks', price: 50 },
			{ title: 'Jacket', price: 350 },
			{ title: 'Shoes', price: 250 },
		];
	}
}

class GoodsItem {
	constructor(title, price) {
		this.title = title;
		this.price = price;
	}

	getHtml() {
		return `<div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/100x80" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <div class="card-bottom">
      <p class="card-price">${this.price}</p>
      <a href="#" class="btn btn-success card-btn">Купить</a>
      </div>
    </div>
  </div>`;
	}
}

class GoodsList {
	constructor() {
		this.api = new ApiMock();
		this.$goodsList = document.querySelector('.cards');
		this.goods = [];
	}

	fetchGoods() {
		this.goods = this.api
			.fetch()
			.map(({ title, price }) => new GoodsItem(title, price));
	}

	render() {
		this.$goodsList.textContent = '';
		this.goods.forEach(good => {
			this.$goodsList.insertAdjacentHTML('beforeend', good.getHtml());
		});
	}

	// Общая стоимость товаров в корзине
	sumCount() {
		const sum = this.goods.reduce(function (acc, currentValue) {
			return acc + currentValue.price;
		}, 0);
		document.querySelector('.sumCount').textContent = `Общая стоимость: ${sum}`;
	}
}

const goodsList = new GoodsList();

goodsList.fetchGoods();
goodsList.render();
goodsList.sumCount();

// // Элемент корзины
// class BasketElement {
// 	constructor(title, price) {
// 		this.title = title;
// 		this.price = price;
// 	}

// 	addElement() {
// 		// Добавление единицы товара
// 	}

// 	removeElement() {
// 		// Удаление единицы товара
// 	}

// 	removeFullElement() {
// 		// Полностью удалить товар из корзины
// 	}
// }

// // Корзина
// class Basket {
// 	constructor() {}

// 	removeBasket() {
// 		// Очистить корзину
// 	}
// }

// class Basket extends GoodsList {
//   super();
// }
