import { getCoords } from 'helpers-js';
import { animate } from './animate';
import { timing } from './timing-functions';

/**
 * Функция для анимации скролла до элемента
 * @param {Object} options - Объект с настройками
 * @param {HTMLElement} options.element - элемент, до которого нужно скроллить экран
 * @param {number} [options.duration=500] - Длительность анимации
 * @param {number} [options.offset=0] - Это расстояние прибавляется к положению целевого элемента
 * @param {function} [options.timing=linear] - Математическая функция для рассчета скорости анимации
 * @param {function} option.onAnimationEnd - функция, вызываемая после завершения анимации
 */
export const animateScroll = (options) => {
    options = Object.assign({
        duration: 500,
        offset: 0,
        timing: timing.linear
    }, options);

    let elemTop = getCoords(options.element).top,
        startPos = window.pageYOffset,
        distance = (elemTop + options.offset) - startPos;

    console.log(elemTop, startPos, distance);

    animate({
        duration: options.duration,
        timing: options.timing,
        draw: (progress) => {
            window.scrollTo(0, startPos + distance * progress);

        },
        onAnimationEnd: options.onAnimationEnd
    });
};
