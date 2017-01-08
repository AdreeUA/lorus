var data = {listExtend: {
    default: {
        items() {
            let items = [];

            for (let i = 0; i < 7; i++) {
                items.push({
                    title: 'Стажер в отдел кадров',
                    descr: 'Мы приглашаем начинающих специалистов преобрести новые навыки и узнать больше об hr-менеджменте',
                    linkText: 'Подробнее на hh.ru'
                });
            }

            return items;
        }
    },

    constructor: {
        items() {
            let items = [];

            for (let i = 0; i < 2; i++) {
                items.push({
                    title: 'Заголовок',
                    descr: 'Мы приглашаем начинающих специалистов преобрести новые навыки и узнать больше об hr-менеджменте',
                    linkText: 'Подробнее'
                });
            }

            return items;
        }
    }
}}
