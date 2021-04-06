export default Vue.component('searchForm', {
	template: `<input id="search" v-model="search" v-on:input="searchHandler" />`,
});