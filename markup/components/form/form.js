import { Component,forEach } from 'helpers-js';

import 'magnific-popup';
import 'static/js/plugins/jquery-validate/jquery.validate';
import 'static/js/plugins/jquery-validate/jquery.validate.extend';

export class Form extends Component {
    constructor(block) {
        super(block, 'form', function() {
            this.form = this.block.querySelector('form');

            this._setAjaxSettings();

            $(this.form).validate({
                submitHandler: (form, e) => {
                    this._onFormSubmit(e, form);
                }
            });

            this._addValidateRules();
        });
    }

    _setAjaxSettings() {
        if (!this.block.getAttribute('data-ajax')) return;

        this.ajaxSettings = JSON.parse(this.block.getAttribute('data-ajax'));

        this.ajaxSettings.success = () => {
            this.showMessage('Спасибо!<br> Ваше сообщение отправлено.');
        };

        this.ajaxSettings.error = () => {
            this.showMessage('Ошибка!<br> Извините, не удалось отправить сообщение. Попробуй еще раз.');
        };
    }

    _onFormSubmit(e, form) {
        e.preventDefault();

        this.ajaxSettings.data = $(form).serialize();
        $.ajax(this.ajaxSettings);
    }

    _addValidateRules() {
        let inputs = this.block.querySelectorAll('.js-validate');

        forEach(inputs, (input) => {
            let rules = JSON.parse(input.getAttribute('data-validate'));

            $(input).rules('add', rules);
        });
    }

    showMessage(message) {
        $.magnificPopup.close();

        $.magnificPopup.open({
            items: {
                src: `
                    <div class="modal" id="writeUs" data-id="r1zxdN0Zzyg">
                        <div class="modal__close mfp-close">
                        </div>
                        <div class="title title_inner modal__title">
                            ${message}
                        </div>
                    </div>`,
                type: 'inline'
            }
        });
    }
}
