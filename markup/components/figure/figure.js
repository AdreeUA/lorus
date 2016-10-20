import { Component } from 'helpers-js';

export class Figure extends Component {
    constructor(block) {
        super(block, 'figure', function() {

        });
    }

    static makeTemplate(data) {
        return `
            <article class="figure">
                <div class="figure__img-wrap">
                    <img src="${data.src}" class="figure__img" alt="${data.alt || ''}" role="presentation">
                </div>
                <div class="figure__text">
                    <h2 class="figure__title">${data.title}</h2>
                    <div class="figure__descr">${data.descr}</div>
                </div>
            </article>
        `;
    }
}
