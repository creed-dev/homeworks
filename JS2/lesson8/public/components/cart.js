export default Vue.component('cart', {
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