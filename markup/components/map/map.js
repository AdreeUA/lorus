import { Component, media } from 'helpers-js';

export class Map extends Component {
    constructor(block) {
        super(block, 'map', function () {
            ymaps.ready(this.init.bind(this));
        });
    }

    init() {
        const options = JSON.parse(this.block.getAttribute('data-options'));
        const map = new ymaps.Map('map', options);

        if (options.mobile) {
            const setOptions = () => {
                if (matchMedia(media.tablet).matches) {
                    map.panTo(options.mobile.center);
                } else {
                    map.panTo(options.center);
                }
            };

            map.behaviors.disable('scrollZoom');

            setOptions();
            window.addEventListener('resize', setOptions);
        }

        if (this.block.getAttribute('data-balloon')) {
            const balloon = JSON.parse(this.block.getAttribute('data-balloon'));
            let items = '';

            balloon.items.forEach(item => items += item);

            const MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                `<div class="mark">
                    <div class="mark__inner">
                        <div class="mark__title"> ${balloon.title} </div>
                        <div class="mark__content">
                            ${items}
                        </div>
                    </div>
                </div>`
            );

            const myPlacemark = new ymaps.Placemark(balloon.placemark, {}, {
                balloonLayout: MyBalloonLayout,
                balloonPanelMaxMapArea: 0
            });

            map.geoObjects.add(myPlacemark);
            myPlacemark.balloon.open();
        }
    }
}
