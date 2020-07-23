ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [55.792081, 49.109309],
        zoom: 16,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаем геообъект с типом геометрии "Точка".
    hotelHilton = new ymaps.GeoObject(
      {
        // Описание геометрии.
        geometry: {
          type: "Point",
          coordinates: [55.792081, 49.109309],
        },
      },
      {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: "islands#blackStretchyIcon",
      }
    );

  myMap.geoObjects.add(hotelHilton);
}
