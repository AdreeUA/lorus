var data = {partners: {
    default: {
        title: 'Наши партнёры',
        items: (data) => Object.keys(data.logo.partners).map(key => data.logo.partners[key])
    }
}}
