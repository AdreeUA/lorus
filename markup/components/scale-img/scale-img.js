import 'magnific-popup';
import { Component, media } from 'helpers-js';

export class ScaleImg extends Component {
    constructor(block) {
        super(block, 'scale-img', function() {
            this.state = 'no-scale';
            this.img = this.block.querySelector('.scale-img__img');
            this.width = parseInt(this.block.getAttribute('data-width'));

            this._isNeedScale();

            window.addEventListener('resize', this._isNeedScale.bind(this));
            this.block.addEventListener('click', this._onClick.bind(this));
        });
    }

    _isNeedScale() {
        if (this.block.clientWidth < this.width) {
            if (this.state === 'no-scale') {
                this.setState('decreased');
            }
        } else {
            if (this.state !== 'no-scale') {
                this.setState('no-scale');
            }
        }
    }

    setState(state) {
        if (state === this.state) return;

        this.state = state;

        switch (state) {

        case 'no-scale':
            this.block.classList.remove('scale-img_increased');
            this.block.classList.remove('scale-img_decreased');
            break;

        case 'increased':
            const _this = this;

            this.block.classList.remove('scale-img_decreased');
            this.block.classList.add('scale-img_increased');

            $.magnificPopup.open({
                mainClass: 'scale-img__popup',
                closeOnContentClick: true,
                items: {
                    src: this.img.getAttribute('src')
                },
                type: 'image',
                callbacks: {
                    open() {
                        document.querySelector('.scale-img__popup .mfp-img').style.width = `${_this.width}px`;
                    },

                    close() {
                        const newState = _this.block.clientWidth < _this.width ? 'decreased' : 'no-scale';
                        _this.setState(newState);
                    }
                }
            });
            break;

        case 'decreased':
            this.block.classList.remove('scale-img_increased');
            this.block.classList.add('scale-img_decreased');
            break;
        }
    }

    _onClick(e) {
        switch (this.state) {

        case 'no-scale':
            return;

        case 'increased':
            this.setState('decreased');
            break;

        case 'decreased':
            this.setState('increased');
            break;
        }
    }
}
