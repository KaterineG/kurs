ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.7602, 37.6143],
    zoom: 14.24
  }, {
    searchControlProvider: 'yandex#search'
  }),


    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark([55.75995, 37.6153], {
      hintContent: 'Собственный значок метки с контентом',
      balloonContent: 'А эта — новогодняя',
      iconContent: ''
    }, {

      iconLayout: 'default#imageWithContent',

      iconImageHref: 'img/location.svg',

      iconImageSize: [20, 20],

      iconImageOffset: [-24, -24],

      iconContentOffset: [15, 15],

      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects

    .add(myPlacemarkWithContent);
  myMap.behaviors.disable('scrollZoom');
});