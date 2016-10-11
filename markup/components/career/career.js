import { Component } from 'helpers-js';

import { ThroughCareer } from './through-career/through-career';

export default function() {
    Component.init(document.querySelector('.through-career'), ThroughCareer);
}
