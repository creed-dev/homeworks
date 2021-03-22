const vue = new Vue({
	el: '#app',
	data: {
		goods: [],
		filtredGoods: [],
		search: '',
		cart: [],
		sumCart: 0,
	},
	methods: {
		searchHandler() {
			if (this.search === '') {
				this.filtredGoods = this.goods;
			}
			const regexp = new RegExp(this.search, 'gi');
			this.filtredGoods = this.goods.filter(good =>
				regexp.test(good.product_name)
			);
		},

		makeGETRequest() {
			return new Promise((resolve, reject) => {
				fetch('/goods.json')
					.then(response => response.json())
					.then(post => resolve(post))
					.catch(err => console.log(err));
			});
		},

		addToCart(e) {
			const index = e.target.dataset.index;
			this.cart.push(this.filtredGoods[index]);
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
	},
});
