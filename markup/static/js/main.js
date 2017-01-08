'use strict';

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
import { ScaleImg } from 'components/scale-img/scale-img';
import { SearchMini } from 'components/search-mini/search-mini';
import { InfoList } from 'components/info/info-list/info-list';
import { NavExtend } from 'components/nav-extend/nav-extend';
import { Map } from 'components/map/map';
import { Form } from 'components/form/form';
import { InnerPage } from 'components/inner-page/inner-page';
import { Write } from 'components/write/write';
import { Share } from 'components/share/share';
import { Modal } from 'components/modal/modal';
import { Gallery } from 'components/gallery/gallery';
import { Preloader } from 'components/preloader/preloader';
import { InfinityScroll } from 'components/infinity-scroll/infinity-scroll';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================

    Component.init('.line', Line);
    Component.init('.header', Header);
    Component.init('.footer', Footer);
    Component.init('.slider', Slider);
    Component.init('.scale-img', ScaleImg);
    Component.init('.decor-title', DecorTitle);
    Component.init('.screens', Screens);
    Component.init('.search-mini', SearchMini);
    Component.init('.info-list', InfoList);
    Component.init('.nav-extend', NavExtend);
    Component.init('.map', Map);
    Component.init('.write', Write);
    Component.init('.share', Share);
    Component.init('.form', Form);
    Component.init('.modal', Modal);
    Component.init('.gallery', Gallery);
    Component.init('.infinity-scroll', InfinityScroll);
    Component.init('.preloader', Preloader);
    Service.initCurrentService();
    InnerPage.initCurrentPage();
});