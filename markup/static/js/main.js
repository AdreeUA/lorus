import polyfills from './libraries/polyfills';
import './plugins/scrollmagic/animation.gsap';
import { Component } from 'helpers-js';

import { Service } from 'components/service/service';
import { Header } from 'components/header/header';
import { Footer } from 'components/footer/footer';
import { Screens } from 'components/screens/screens';
import { Slider } from 'components/slider/slider';
import { DecorTitle } from 'components/decor-title/decor-title';
import { Line } from 'components/line/line';
import { SearchMini } from 'components/search-mini/search-mini';
import { InfoList } from 'components/info/info-list/info-list';

'use strict';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================

    Component.init('.line', Line);
    Component.init('.header', Header);
    Component.init('.footer', Footer);
    Component.init('.slider', Slider);
    Component.init('.decor-title', DecorTitle);
    Component.init('.screens', Screens);
    Component.init('.search-mini', SearchMini);
    Component.init('.info-list', InfoList);
    Service.initCurrentService();
});
