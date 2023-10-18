var groups = [
    {
        name: "Карта объектов",
        items: [
            {
                center: [60.982887, 69.056505],
                name: 'КУ “Центр медицины катастроф”',
                address: '628001 г. Ханты-Мансийск, ул. Сутормина 20 <br>e-mail: mail@cmkhmao.ru'
            },
            {
                center: [63.9380600, 65.0419400],
                name: 'Берёзовский филиал',
                address: '628140 г.п. Берёзово, ул. Астраханцева 27'
            },
            {
                center: [61.2500000, 73.4166700],
                name: 'Сургутский филиал',
                address: '628400 г. Сургут, ул. Энергетиков 14'
            },
            {
                center: [60.9344000, 76.5531000],
                name: 'Нижневартовский филиал',
                address: '628615 г. Нижневартовск, ул. Дзержинского 25-75'
            },
            {
                center: [62.1405600, 65.3936100],
                name: 'Няганьский филиал',
                address: '628181 г. Нягань, ул. Транспортная, 28/3'
            },
        ]
    }
];
ymaps.ready(init);

function init() {

    // Создание экземпляра карты.
    var map = new ymaps.Map('map', {
        center: [60.98258263015422,69.0560173379592],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    //map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил

    // Контейнер для меню.
    menu = $('<div class="map-list"/>');

    for (var i = 0, l = groups.length; i < l; i++) {
        createMenuGroup(groups[i]);
    }

    function createMenuGroup(group) {
        // Пункт меню.
        var menuItem = $('<div class="map-list__title">' + group.name + '</div>'),
            // Коллекция для геообъектов группы.
            collection = new ymaps.GeoObjectCollection(null, {}),
            // Контейнер для подменю.
            submenu = $('<ul class="map-list__items"/>');

        // Добавляем коллекцию на карту.
        map.geoObjects.add(collection);
        // Добавляем подменю.
        menuItem
            .append(submenu)
            // Добавляем пункт в меню.
            .appendTo(menu)
        for (var j = 0, m = group.items.length; j < m; j++) {
            createSubMenu(group.items[j], collection, submenu);
        }
    }

    function createSubMenu(item, collection, submenu) {
        // Пункт подменю.
        var submenuItem = $('<li><a href="#" class="map-list__item-name">' + item.name + '<span>' + item.address + '</span></a></li>'),
            // Создаем метку.
            placemark = new ymaps.Placemark(item.center, {balloonContent: item.name + '<br>' + item.address});

        // Добавляем метку в коллекцию.
        collection.add(placemark);
        // Добавляем пункт в подменю.
        submenuItem
            .appendTo(submenu)
            // При клике по пункту подменю открываем/закрываем баллун у метки.
            .find('a')
            .bind('click', function () {
                if (!placemark.balloon.isOpen()) {
                    placemark.balloon.open();
                } else {
                    placemark.balloon.close();
                }
                return false;
            });
    }

    // Добавляем меню в тэг BODY.
    menu.appendTo($('#map'));
    // Выставляем масштаб карты чтобы были видны все группы.
    map.setBounds(map.geoObjects.getBounds());
}