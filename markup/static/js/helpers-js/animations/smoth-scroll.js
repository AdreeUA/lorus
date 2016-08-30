import { animate, stopAnimation } from './animate';
import { timing } from './timing-functions';

let maxStek = 2,
    curStek = 0;

/**
 * Функция для замены обычного скролла на плавный
 */
export const smothScroll = (options) => {
    if (curStek >= maxStek) return;

    options = Object.assign({
        maxX: false,
        maxY: false
    }, options);

    let x = 0,
        y = 0,
        startX = pageXOffset,
        startY = pageYOffset,
        maxY = options.maxY;

    curStek++;

    switch (options.direction) {
        case 'right':
            x = options.distance;
            break;

        case 'left':
            x = -options.distance;
            break;

        case 'down':
            maxY = options.distance > 0 ? Math.min(options.distance, options.maxY) : Math.max(options.distance, options.maxY);
            y = options.maxY ? maxY : options.distance;
            break;

        case 'up':
            y = -options.distance;
            break;
    }

    animate({
        duration: 150,
        name: 'smoth-scroll',
        timing: timing.linear,
        draw: (progress) => {
            window.scrollTo(startX + x * progress, startY + y * progress);
        },
        onAnimationEnd() {
            curStek--;
            if (typeof options.onEnd === 'function') {
                setTimeout(() => {
                    options.onEnd();
                }, 50);
            }
        }
    });
};
