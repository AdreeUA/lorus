import { Component } from 'helpers-js';

import { CareerPage } from './career-page/career-page';
import { AcademyPage } from './academy-page/academy-page';
import { LesPage } from './les-page/les-page';
import { ContactsPage } from './contacts-page/contacts-page';
import { ConstructorPage } from './constructor-page/constructor-page';
import { ClientsPage } from './clients-page/clients-page';

export class InnerPage extends Component {
    constructor(block) {
        super(block, 'inner-page', function() {});
    }
}

InnerPage.initCurrentPage = () => {
    Component.init(document.querySelector('.career-page'), CareerPage);
    Component.init(document.querySelector('.academy-page'), AcademyPage);
    Component.init(document.querySelector('.les-page'), LesPage);
    Component.init(document.querySelector('.contacts-page'), ContactsPage);
    Component.init(document.querySelector('.constructor-page'), ConstructorPage);
    Component.init(document.querySelector('.clients-page'), ClientsPage);
}
