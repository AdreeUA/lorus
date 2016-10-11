import { Component } from 'helpers-js';

export class SearchMini extends Component {
    constructor(block) {
        super(block, 'search-mini', function() {
            this.btn = this.block.querySelector('.search-mini__submit');
            this.form = this.block.querySelector('.search-mini__form');
            this.list = this.block.querySelector('.search-mini__results');
            this.field = this.block.querySelector('.input__field');

            this._init();
        });
    }

    _init() {
        //this.btn.setAttribute('disabled', 'disabled');
    
        this.block.addEventListener('keyup', this._onKeyup.bind(this));
        this.form.addEventListener('submit', this._onSubmit.bind(this));
        this.field.addEventListener('blur', this._onBlur.bind(this));
    }
    
    _onKeyup(e) {
        let field = e.target.closest('.search-mini__field');
    
        if (field) {
            if (field.value) {
                this.btn.removeAttribute('disabled');
            } else {
                this.btn.setAttribute('disabled', 'disabled');
            }
        };
    }
    
    _onSubmit(e) {
        let $field = $(this.field),
            $list = $(this.list);

        if (!$field.width()) {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            $field
                .removeClass('input__field_hidden')
                .focus();

            $list.slideDown(500);
        };
    }
    
    _onBlur(e) {
        let $field = $(this.field),
            $list = $(this.list);

        $field.addClass('input__field_hidden');
        $list.slideUp(500);
    }
}
