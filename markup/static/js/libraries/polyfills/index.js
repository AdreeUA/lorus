import svg4everybody from 'svg4everybody';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import bowser from 'bowser';
import objectFitImages from 'object-fit-images';
import 'matchmedia-polyfill';
import 'babel-polyfill';
import './customEvent';
import './classList';
import './matches';
import './closest';
import './requestAnimationFrame';

export default {
    init() {
        svg4everybody();
        viewportUnitsBuggyfill.init();
        objectFitImages();

        document.documentElement.classList.add(bowser.name.split(' ').pop().toLowerCase());
    }
};
