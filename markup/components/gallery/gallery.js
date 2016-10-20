import { Component } from 'helpers-js';

export class Gallery extends Component {
    constructor(block) {
        super(block, 'gallery', function() {
            this._init()
        });
    }

    _init() {
        var gallery = $('.gallery');

        gallery.each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: '.gallery__item', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled:true
                }
            });
        });

    }
}
