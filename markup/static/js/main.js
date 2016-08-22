import polyfills from './libraries/polyfills';
import { Component } from 'helpers-js';

import { Slider } from 'components/slider/slider';

'use strict';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================

    Component.init('.slider', Slider);
});
