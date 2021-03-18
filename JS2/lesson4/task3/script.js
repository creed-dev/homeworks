const form = document.querySelector('.form');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputNumber = document.querySelector('#input-number');
const inputText = document.querySelector('#input-text');

const regExpName = /^[a-zа-яё]+$/i;
const regExpEmail = /.+\@.+\..+/i;
const regExpNumber = /\+7\(\d{3}\)\d{3}-\d{4}/;

form.addEventListener('submit', e => {
	e.preventDefault();
	inputName.className = regExpName.test(inputName.value) ? '' : 'red-border';
	inputEmail.className = regExpEmail.test(inputEmail.value) ? '' : 'red-border';
	inputNumber.className = regExpNumber.test(inputNumber.value)
		? ''
		: 'red-border';
});
