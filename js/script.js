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