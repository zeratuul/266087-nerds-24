// Карта на сайте
ymaps.ready(init); // вызов функции
//events
function init() { // определение функции 
	var map = new ymaps.Map('map', { //создаем новый конструктор для карты
		center: [59.9386, 30.3231], //определяем центр карты (http://webmap-blog.ru/tools/getlonglat-ymap2.html)
		zoom: 17, // определяем уровеь масштабирования
		controls: ['zoomControl'], // выбираем какие элементы управления отоброжать
		behaviors: ['drag'] // отключаем масштабирование - включаем перетаскивание
	});
	//Добавляем всплывающую подсказку (hint)
	var placemark = new ymaps.Placemark([59.9386, 30.3231], {
		hintContent: 'NERDS' //контент хинта
	},
		//изображение хинта
		{
			iconLayout: 'default#image', //название
			iconImageHref: 'img/marker.png', //источник
			iconImageSize: [238, 190], //размер 
			iconImageOffset: [-40, -140] //координаты смещения
		});
	//вызываем метку с помощью коллекции geoObjects
	map.geoObjects.add(placemark);
};


/*Модальное окно*/

var overlay = document.querySelector(".overlay"),
	modalOpen = document.querySelector(".call-modal"),
	modalClose = document.querySelector(".modal__exit");
modalOpen.addEventListener("click", function (event) {
	event.preventDefault();
	overlay.style.display = "flex";
});
modalClose.addEventListener("click", function (event) {
	event.preventDefault();
	overlay.style.display = "none";
});
window.addEventListener("click", function (event) {
	if (event.target === overlay) {
		overlay.style.display = "none";
	}
});
window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		overlay.style.display = "none";
	}
});
var form = document.querySelector(".modal-form");
var email = document.querySelector('input[type="email"]');
form.addEventListener("submit", function (event) {
	event.preventDefault();

	if (email.value === "") {
		email.classList.add("modal-form__input_error");
	}

	setTimeout(function () {
		email.classList.remove("modal-form__input_error");
	}, 3000);
});


if (document.body.classList.contains('index-body')) {
	/* Слайдер */
	var dots = document.querySelectorAll(".dot");
	var slides = document.querySelectorAll(".hero-list li");

	var _loop = function _loop(i) {
		dots[i].addEventListener("click", function () {
			document.querySelector(".dot.selected").classList.remove("selected");
			dots[i].classList.add("selected");

			for (var j = 0; j < slides.length; j++) {
				document
					.querySelector(".hero-list li.selected")
					.classList.remove("selected");
				slides[i].classList.add("selected");
			}
		});
	};

	for (var i = 0; i < dots.length; i++) {
		_loop(i);
	}

}

function numberLimitation (inp, limit) {
    var t = typeof inp === "string" ? document.querySelector (inp) : inp,
    f = function (e) {
        var v = t.value.split ("");
        if (v.length > limit) {
              t.value = v.slice(0, limit).join("");
        }
    };
    t.addEventListener ("input", f);
}
window.addEventListener ("load", function () {
  numberLimitation ("#inp", 5);
})