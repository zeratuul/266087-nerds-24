const overlay = document.querySelector('.overlay'),
modalOpen = document.querySelector('.call-modal'),
modalClose = document.querySelector('.modal__exit');



modalOpen.addEventListener('click', function (event) {
	event.preventDefault();
	overlay.style.display = "flex";
})

modalClose.addEventListener('click', function (event) {
	event.preventDefault();
	overlay.style.display = "none";
})

window.addEventListener('click', function (event) {
	if (event.target === overlay) {
		overlay.style.display = "none";
	}
});

window.addEventListener('keydown', function (event) {
	if (event.keyCode === 27) {
		overlay.style.display = "none";
	}
})