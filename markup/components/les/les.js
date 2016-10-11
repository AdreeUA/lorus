import { Component } from 'helpers-js';

import { ThroughLes } from './through-les/through-les';

export default function() {
    Component.init(document.querySelector('.through-les'), ThroughLes);
}
