import polyfills from './libraries/polyfills';
import { Component } from 'helpers-js';

import { Screens } from 'components/screens/screens';
import { Slider } from 'components/slider/slider';
import { InfoList } from 'components/info/info-list/info-list';

'use strict';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================

    Component.init('.screens', Screens);
    Component.init('.slider', Slider);
    Component.init('.info-list', InfoList);
});
