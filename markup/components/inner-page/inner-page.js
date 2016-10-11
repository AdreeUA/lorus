import { Component } from 'helpers-js';

import { CareerPage } from './career-page/career-page';

export class InnerPage extends Component {
    constructor(block) {
        super(block, 'inner-page', function() {});
    }
}

InnerPage.initCurrentPage = () => {
    Component.init(document.querySelector('.career-page'), CareerPage);
}
