import svg4everybody from 'svg4everybody';
import bowser from 'bowser';
import 'babel-polyfill';
import './customEvent';
import './classList';
import './matches';
import './closest';
import './requestAnimationFrame';

export default {
    init() {
        svg4everybody();

        document.documentElement.classList.add(bowser.name.split(' ').pop().toLowerCase());
    }
};
