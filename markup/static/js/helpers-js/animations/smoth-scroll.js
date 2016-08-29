import { animate, stopAnimation } from './animate';
import { timing } from './timing-functions';

let maxStek = 3,
    curStek = 0;

/**
 * Функция для замены обычного скролла на плавный
 */
export const smothScroll = (options) => {
    if (curStek >= maxStek) return;

    let x = 0,
        y = 0,
        startX = pageXOffset,
        startY = pageYOffset;

    curStek++;

    switch (options.direction) {
        case 'right':
            x = options.distance;
            break;

        case 'left':
            x = -options.distance;
            break;

        case 'down':
            y = options.distance;
            break;

        case 'up':
            y = -options.distance;
            break;
    }

    let drawFunc = (() => {
        let scrollBy = (progress) => {
            window.scrollTo(startX + x * progress, startY + y * progress);
        }

        if (typeof options.inProgress === 'function') {
            return (progress) => {
                options.inProgress();
                scrollBy(progress);
            }
        } else {
            return scrollBy;
        }
    })();

    if (typeof options.onBeforeStart === 'function') {
        options.onBeforeStart();
    }

    animate({
        duration: 150,
        name: 'smoth-scroll',
        timing: timing.linear,
        draw: drawFunc,
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
