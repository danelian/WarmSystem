ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.87537456883673, 37.525369499999954],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: '',
      balloonContent: ''
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/placemark.svg',
      // Размеры метки.
      iconImageSize: [92, 92],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -46]
    });

  myMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemarkWithContent);
});