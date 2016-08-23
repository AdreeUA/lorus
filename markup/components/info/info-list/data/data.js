var data = {infoList: {
    default: {
        slider: {
            settings: {
                fade: true,
                dots: true,
                speed: false
            },
            template: 'info',
            items(data) {
                return Object.keys(data.info).map(key => data.info[key]);
            }
        }
    }
}}
