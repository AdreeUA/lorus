var data = {nav: {
    header: {
        screenreader: 'Навигация по странице',
        items: [
            { text: 'О компании', href: '#about' },
            { text: 'Миссия', href: '#mission' },
            { text: 'Преимущества', href: '#advantages' },
            { text: 'Команда', href: '#team' }
        ]
    },
    menu: {
        screenreader: 'О компании',
        title: {
            text: 'О компании',
            href: '#home'
        },
        items: [
            { text: 'Миссия', href: '#mission' },
            { text: 'Преимущества', href: '#advantages' },
            { text: 'Наша команда', href: '#team' },
            { text: 'Наши партнеры', href: 'javascript:void(0)', subitems: [
                {
                    text: 'Партнер 1', href: 'javascript:void(0)'
                },
                {
                    text: 'Партнер 2', href: 'javascript:void(0)'
                },
                {
                    text: 'Партнер 3', href: 'javascript:void(0)'
                }
            ]}
        ]
    },
    service: {
        screenreader: 'Услуги',
        title: {
            text: 'Услуги',
            href: 'services.html'
        },
        items: [
            { text: 'Консалтинг и Инжиниринг', href: 'javascript:void(0)', subitems: [
                {
                    text: '1', href: 'javascript:void(0)'
                },
                {
                    text: '2', href: 'javascript:void(0)'
                },
                {
                    text: '3', href: 'javascript:void(0)'
                }
            ]},

            { text: 'Интеграция', href: 'javascript:void(0)', subitems: [
                {
                    text: '1', href: 'javascript:void(0)'
                },
                {
                    text: '2', href: 'javascript:void(0)'
                },
                {
                    text: '3', href: 'javascript:void(0)'
                }
            ]},

            { text: 'Логистические решения', href: 'javascript:void(0)', subitems: [
                {
                    text: '1', href: 'javascript:void(0)'
                },
                {
                    text: '2', href: 'javascript:void(0)'
                },
                {
                    text: '3', href: 'javascript:void(0)'
                }
            ]},

            { text: 'e-Commerce', href: 'javascript:void(0)', subitems: [
                {
                    text: 'Таможня', href: 'javascript:void(0)'
                },
                {
                    text: 'Внутризаводская логистика', href: 'javascript:void(0)'
                },
                {
                    text: 'Решения для автомобильной промышленности', href: 'javascript:void(0)'
                }
            ]}

        ]
    }
}}
