export default Vue.component('goods-item', {
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