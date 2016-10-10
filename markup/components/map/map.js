import { Component } from 'helpers-js';

export class Map extends Component {
    constructor(block) {
        super(block, 'map', function () {
            ymaps.ready(this.init);
        });
    }

    init() {
        var map = new ymaps.Map('map', {
            center: [55.76, 37.602],
            zoom: 15,
            controls: []
        });

        var MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="mark">'+
            '<div class="mark__inner">'+
            '<div class="mark__title">Головной офис в Москве</div>'+
            '<div class="mark__content">'+
            '<div class="mark__item">Ул. Тестовская, дом 10, подъезд 2 (Северная башня)</div>'+
            '<div class="mark__item"><a href="mailto:info@lorus-scm.com" class="mark__email link link_theme_fill">info@lorus-scm.com</a></div>'+
            '<div class="mark__item"><a href="tel:+74952128506" class="mark__phone">+7 495 212-85-06</a></div>'+
            '</div>'+
            '</div>'+
            '</div>'
        );

        var myPlacemark = new ymaps.Placemark([55.764286, 37.581408], {}, {
            balloonLayout: MyBalloonLayout
        });

        map.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open([55.76, 37.64]);

    }
}
