export default Vue.component('search', {
	template: `<input id="search" @input="searchHandler" placeholder="Поиск..." />`,

	methods: {
		searchHandler(e) {
			this.$emit('valueСhange', e);
		},
	},
});