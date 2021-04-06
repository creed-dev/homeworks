export default Vue.component('cartItem', {
	// Создание нового компонента
	template: `<div class="card cart-item" :data-id="id">
				<h5 class="card-title">{{ title }}</h5>
				<p class="card-price">{{ price }}</p>
				<slot></slot>
			</div>`,
	props: ['title', 'price', 'id'], // задаем параметры компонента
});