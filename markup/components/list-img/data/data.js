var data = {listImg: {
    clients: {
        items() {
            let items = [];

            for (let i = 0; i < 9; i++) {
                let descr = 'Карты компетенций – определение и периодическое обновление набора компетенций (как личностных, так и профессиональных).',
                    title,
                    src = '%=static=%img/assets/list-img/client-' + (i%6 + 1) + '.jpg';

                switch (i%3) {

                    case 0:
                    title = 'Olympiada';
                    break;

                    case 1:
                    title = 'Intel';
                    break;

                    case 2:
                    title = 'Birl Integration LLC';
                    break;

                    default:
                    title = 'Olympiada';
                }

                items.push({
                    title: title,
                    descr: descr,
                    src: src
                });
            }

            return items;
        }
    }
}} 