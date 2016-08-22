var data = {infoList: {
    default: {
        slider: {
            settings: {
                dots: true
            },
            template: 'info',
            items(data) {
                return Object.keys(data.info).map(key => data.info[key]);
            }
        }
    }
}}
