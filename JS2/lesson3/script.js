function makeGETRequest() {
	return new Promise((resolve, reject) => {
		fetch(
			'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
		)
			.then(response => response.json())
			.then(post => resolve(post))
			.catch(err => console.log(err));
	});
}

class GoodsItem {
	constructor(product_name, price) {
		this.product_name = product_name;
		this.price = price;
		this.$button = document.querySelector('.card-btn');
	}

	getHtml() {
		return `<div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/100x80" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${this.product_name}</h5>
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
		this.api = makeGETRequest();
		this.$goodsList = document.querySelector('.cards');
		this.goods = [];
	}

	fetchGoods() {
		makeGETRequest()
			.then(post =>
				post.map(
					({ product_name, price }) => new GoodsItem(product_name, price)
				)
			)
			.then(post =>
				post.forEach(good => {
					this.$goodsList.insertAdjacentHTML('beforeend', good.getHtml());
				})
			);
	}

	render() {
		this.$goodsList.textContent = '';
	}

	// Общая стоимость товаров в корзине
	sumCount() {
		makeGETRequest()
			.then(sum =>
				sum.reduce(function (acc, currentValue) {
					return acc + currentValue.price;
				}, 0)
			)
			.then(
				sum =>
					(document.querySelector(
						'.sumCount'
					).textContent = `Общая стоимость: ${sum}`)
			);
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
