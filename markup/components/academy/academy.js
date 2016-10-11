import { Component } from 'helpers-js';

import { ThroughAcademy } from './through-academy/through-academy';

export default function() {
    Component.init(document.querySelector('.through-academy'), ThroughAcademy);
}
