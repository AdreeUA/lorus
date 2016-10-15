import { Component } from 'helpers-js';

export class Figure extends Component {
    constructor(block) {
        super(block, 'figure', function() {

        });
    }

    static makeTemplate(data) {
        return `
            <div class="figure__img-wrap">
                <img src="${data.src}" class="figure__img" alt="${data.alt || ''}" role="presentation">
            </div>
            <div class="figure__text">
                <div class="figure__title">${data.title}</div>
                <div class="figure__descr">${data.descr}</div>
            </div>
        `;
    }
}
