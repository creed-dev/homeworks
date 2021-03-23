Vue.component('no-data', {
	template: `<div class="fs-5 no-data">Нет данных</div>`,
});

Vue.component('goods-item', {
	// Создание нового компонента
	template: `<div :data-id="id" class="card" style="width: 18rem">
			<img src="https://via.placeholder.com/100x80" class="card-img-top" alt="card-photo"/>
				<div class="card-body">
					<h5 class="card-title">{{ title }}</h5>
					<div class="card-bottom">
						<p class="card-price">{{ price }}</p>
						<slot></slot>
					</div>
				</div>
		</div>`,
	props: ['title', 'price', 'id'], // задаем параметры компонента
});

Vue.component('cart', {
	// создание компонента корзины
	template: `<div>
				<button class="btn btn-primary cart-button" @click="openCartHandler" type="button">Корзина</button>
				<div v-if="isVisibleCart" v-on:click="removeHandler">
				<slot></slot>
				</div>
			</div>`,
	data() {
		// данные компонента (Обязательно в виде метода!)
		return {
			isVisibleCart: false,
		};
	},
	methods: {
		openCartHandler() {
			this.isVisibleCart = !this.isVisibleCart;
		},

		removeHandler(e) {
			this.$emit('remove', e); // Генерируем пользовательское событие
		},
	},
});

Vue.component('search', {
	template: `<input id="search" @input="searchHandler" placeholder="Поиск..." />`,

	methods: {
		searchHandler(e) {
			this.$emit('valueСhange', e);
		},
	},
});

Vue.component('cart-item', {
	// Создание нового компонента
	template: `<div class="card cart-item" :data-id="id">
				<h5 class="card-title">{{ title }}</h5>
				<p class="card-price">{{ price }}</p>
				<slot></slot>
			</div>`,
	props: ['title', 'price', 'id'], // задаем параметры компонента
});

Vue.component('searchform', {
	template: `<input id="search" v-model="search" v-on:input="searchHandler" />`,
});

const vue = new Vue({
	el: '#app',
	data: {
		cart: [],
		goods: [],
		filtredGoods: [],
		search: '',
	},
	methods: {
		addToCartHandler(e) {
			const id = e.target.closest('.card').dataset.id;
			const good = this.goods.find(item => item.id == id);

			this.cart.push(good);
		},

		removeFromCartHandler(e) {
			const id = e.target.closest('.cart-item').dataset.id;
			const goodIndex = this.cart.findIndex(item => item.id == id);

			this.cart.splice(goodIndex - 1, 1);
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
				fetch('/goods.json')
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
	},
});
