const form = document.querySelector('.form');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputNumber = document.querySelector('#input-number');
const inputText = document.querySelector('#input-text');
const alertMessage = document.querySelector('.alert');

alertMessage.className = 'alert';

const regExpName = /^[a-zа-яё]+$/i;
const regExpEmail = /.+\@.+\..+/i;
const regExpNumber = /\+7\(\d{3}\)\d{3}-\d{4}/;

form.addEventListener('submit', e => {
	e.preventDefault();
	if (regExpName.test(inputName.value) == false) {
		inputName.className = 'red-border';
		alertMessage.textContent = 'Введено неверное значение';
	}
	if (regExpEmail.test(inputEmail.value) == false) {
		inputEmail.className = 'red-border';
		alertMessage.textContent = 'Введено неверное значение';
	}
	if (regExpNumber.test(inputNumber.value) == false) {
		inputNumber.className = 'red-border';
		alertMessage.textContent = 'Введено неверное значение';
	}
});
