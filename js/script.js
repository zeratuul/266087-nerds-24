// Yandex Map ===================================
ymaps.ready(init);

function init() {
  var map = new ymaps.Map('map', {
    center: [59.9386, 30.3231],
    zoom: 17,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });
  var placemark = new ymaps.Placemark([59.9386, 30.3231], {
    hintContent: 'NERDS'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/marker.png',
    iconImageSize: [238, 190],
    iconImageOffset: [-40, -140]
  });
  map.geoObjects.add(placemark);
};

// Modal =====================================
// variables
var overlay = document.querySelector(".overlay");
var modalOpen = document.querySelector(".call-modal");
var modalClose = document.querySelector(".modal__exit");
var form = document.querySelector(".modal-form");
var email = document.querySelector('input[type="email"]');
// events
// show modal
modalOpen.addEventListener("click", function (event) {
  event.preventDefault();
	overlay.style.display = "flex";
	document.body.style.overflow = "hidden";
	// add animation fadeIn
	document.querySelector(".modal").classList.add("fadeIn")
	// remove animation fadeIn
  setTimeout(() => {
    document.querySelector(".modal").classList.remove("fadeIn")
  }, 1000);
});
// close modal
modalClose.addEventListener("click", function (event) {
  event.preventDefault();
	overlay.style.display = "none";
	document.body.style.overflow = "unset";
});
// close modal when we click over our modal area
window.addEventListener("click", function (event) {
  if (event.target === overlay) {
		overlay.style.display = "none";
		document.body.style.overflow = "unset";
  }
});
// close modal when we press Escape 
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
		overlay.style.display = "none";
		document.body.style.overflow = "unset";
  }
});
// validation
form.addEventListener("submit", function (event) {
	event.preventDefault();
	// if field is empty
  if (email.value === "") {
		// show error 
		email.classList.add("modal-form__input_error");
		// add animation shake
		document.querySelector(".modal").classList.add("snake")
		// remove animation shake and error
    setTimeout(() => {
			document.querySelector(".modal").classList.remove("snake");
			email.classList.remove("modal-form__input_error");
    }, 1000);
  }
});

// Slider ==========================================
if (document.body.classList.contains('index-body')) {
  // variables
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
