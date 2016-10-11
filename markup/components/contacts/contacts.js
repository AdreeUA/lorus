import { Component } from 'helpers-js';

import { ThroughContacts } from './through-contacts/through-contacts';

export default function() {
    Component.init(document.querySelector('.through-contacts'), ThroughContacts);
}
