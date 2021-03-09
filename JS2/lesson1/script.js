const goods = [
	{ title: 'Shirt', price: 150 },
	{ title: 'Socks', price: 50 },
	{ title: 'Jacket', price: 350 },
	{ title: 'Shoes', price: 250 },
];

const cards = document.querySelector('.cards');

const renderGoodsItem = ({ title, price }) => {
	return `<div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/100x80" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <div class="card-bottom">
      <p class="card-price">${price}</p>
      <a href="#" class="btn btn-success card-btn">Купить</a>
      </div>
    </div>
  </div>`;
};

const renderGoodsList = list => {
	let goodsList = list.map(item => renderGoodsItem(item)).join('\n');
	cards.insertAdjacentHTML('beforeend', goodsList);
};

renderGoodsList(goods);

// Запятые создаются потому что мы создаём массив, в котором значения разделены запятыми. Следовательно, они и выводятся. Решением является добавление .join('\n')
