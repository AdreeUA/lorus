import { Component } from 'helpers-js';
import ScrollMagic from 'scrollmagic';

import { Figure } from 'components/figure/figure';

export class InfinityScroll extends Component {
    constructor(block) {
        super(block, 'infinity-scroll', function() {
            this.setupInfinityLoading();
        });
    }

    setupInfinityLoading() {
        const controller = new ScrollMagic.Controller();
        const loader = this.block.querySelector('.infinity-scroll__loader');
        const options = JSON.parse(this.block.getAttribute('data-options'));
        const container = this.block.querySelector(options.appendTo);

        let scene = new ScrollMagic.Scene({
                triggerElement: loader,
                triggerHook: 'onEnter'
            })
            .addTo(controller)
            .on('enter', e => {
                if (!loader.classList.contains('infinity-scroll__loader_active')) {
                    loader.classList.add('infinity-scroll__loader_active');

                    const data = JSON.stringify(options.data);

                    $.ajax({
                        url: options.url,
                        data,
                        type: options.type,
                        success: onSuccess
                    });
                }
            });

        const onSuccess = (data) => {
            loader.classList.remove('infinity-scroll__loader_active');

            data = typeof data === 'string' ? JSON.parse(data) : data;

            if (!data.items || data.items.length === 0) {
                scene = scene.destroy();
                return;
            }

            let templates = '';

            data.items.forEach(itemData => {
                const itemTemplate = this._makeTemplate(options.template, itemData);
                templates += itemTemplate;
            });

            container.insertAdjacentHTML('beforeEnd', templates);
            scene.update();

            if (data.last) {
                scene = scene.destroy();
            }
        }
    }

    _makeTemplate(type, data) {
        switch (type) {

        case 'list-img__item':
            return `
                <a class="list-img__item" href="${data.href}">
                    ${Figure.makeTemplate(data)}
                </a>
            `;
        }
    }
}
