var data = {input: {
    'name': {
        'label': 'Как к вам обращаться?',
        'name': 'name',
        'required': true
    },

    'phone': {
        'label': 'Телефон для связи',
        'name': 'phone',
        'required': true,
        'validate': {
            "tel": true
        }
    },

    'message': {
        'label': 'Комментарий',
        'name': 'message',
        'required': true,
        'type': 'textarea'
    }
}}
