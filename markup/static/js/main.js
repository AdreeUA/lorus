import polyfills from './libraries/polyfills';
import './plugins/scrollmagic/animation.gsap';
import { Component } from 'helpers-js';

import { Screens } from 'components/screens/screens';
import { Slider } from 'components/slider/slider';
import { Line } from 'components/line/line';
import { InfoList } from 'components/info/info-list/info-list';

'use strict';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================

    Component.init('.line', Line);
    Component.init('.screens', Screens);
    Component.init('.slider', Slider);
    Component.init('.info-list', InfoList);
});
