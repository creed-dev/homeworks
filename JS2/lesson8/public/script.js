import noData from './components/noData';
import noCart from './components/noCart'
import goodsItem from './components/goodsItem'
import cart from './components/cart'
import search from './components/search'
import cartItem from './components/cartItem'
import searchForm from './components/searchform'

const vue = new Vue({
	el: '#app',
	data: {
		cart: [],
		goods: [],
		filtredGoods: [],
		search: '',
	},
	methods: {

		updateCart() {
			// каждое изменение корзины закидываем на сервер и забираем копию с сервера.
			// Таким образом точкой истины является файл на сервере
			fetch('http://localhost:3003/cart', {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(this.cart),
			})
			  .then((response) => {
				return response.json();
			  })
			  .then((data) => {
				this.cart = data;
			  });
		  },

		addToCartHandler(e) {
			const id = e.target.closest('.card').dataset.id;
			const good = this.goods.find(item => item.id == id);

			this.cart.push(good);

			this.updateCart();
		},

		removeFromCartHandler(e) {
			const id = e.target.closest('.cart-item').dataset.id;
			const goodIndex = this.cart.findIndex(item => item.id == id);

			this.cart.splice(goodIndex - 1, 1);

			this.updateCart();
		},

		searchHandler(e) {
			const {
				target: { value },
			} = e;
			if (value === '') {
				this.filtredGoods = this.goods;
			}
			const regexp = new RegExp(value, 'gi');
			this.filtredGoods = this.goods.filter(good => regexp.test(good.title));
		},

		makeGETRequest() {
			return new Promise((resolve, reject) => {
				fetch('http://localhost:3003/data')
					.then(response => response.json())
					.then(post => resolve(post))
					.catch(err => console.log(err));
			});
		},
	},
	mounted() {
		this.makeGETRequest().then(posts => {
			this.goods = posts;
			this.filtredGoods = posts;
		});
		this.makeGETRequest()
			.then(sum =>
				sum.reduce(function (acc, currentValue) {
					return acc + currentValue.price;
				}, 0)
			)
			.then(sum => (this.sumCart = sum));

		fetch('http://localhost:3003/cart')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			this.cart = data;
		})
		.catch((err) => {
			console.log(err);
		});
	},
});
