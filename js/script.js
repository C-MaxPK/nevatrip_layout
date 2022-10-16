'use strict';

const btnMore = document.querySelector('.more');
const timesBtnHidden = document.querySelectorAll('.hidden');

const showMoreTime = () => {
	timesBtnHidden.forEach(btn => btn.classList.remove('hidden'));
	btnMore.remove();
};

btnMore.addEventListener('click', showMoreTime);
