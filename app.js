const modal = document.querySelector('.modal');
const heros = document.querySelectorAll('.hero-btn');
const modalCloseBtn = document.getElementById('modal__close-btn');

heros.forEach((hero) => {
	hero.addEventListener('click', () => {
		modal.classList.toggle('visible');
		modalCloseBtn.focus();
	});
});

modalCloseBtn.addEventListener('click', () =>
	modal.classList.toggle('visible')
);
