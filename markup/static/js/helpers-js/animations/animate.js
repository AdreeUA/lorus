import shortid from 'shortid';

import { timing } from './timing-functions';

let animations = {};

/**
 * Функция для создания анимации
 * @param {Object} options - Объект с настройками
 * @param {string} [name] - имя анимации, используется для отмены
 * @param {number} [options.duration=500] - Длительность анимации
 * @param {function} [options.timing=linear] - Математическая функция для рассчета скорости анимации
 * @param {function} options.draw Функция, - описывающая анимацию
 * @param {function} option.onAnimationEnd функция, - вызываемая после завершения анимации
 */
export const animate = (options) => {

    options = Object.assign({
        name: shortid.generate(),
        duration: 500,
        timing: timing.linear
    }, options);

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction от 0 до 1
        let timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        // текущее состояние анимации
        let progress = options.timing(timeFraction);

        options.draw(progress);

        if (timeFraction < 1) {
            animations[options.name] = requestAnimationFrame(animate);
        } else {
            delete animations[options.name];
            if (typeof options.onAnimationEnd === 'function') {
                setTimeout(() => {
                    options.onAnimationEnd();
                }, 50);
            }
        }

    });
};

export const stopAnimation = (name) => {
    if (typeof name === 'string') {
        window.cancelAnimationFrame(animations[name]);
        delete animations[name];
    } else {
        for (let anim of animations) {
            window.cancelAnimationFrame(anim);
        }

        animations = {};
    }
}
