import { media } from './variables';

export const toggleController = (controller) => {
    if (matchMedia(media.tablet).matches) {
        if (!controller.enabled()) return;

        TweenMax.set('.js-tween', { clearProps: 'all' });
        controller.enabled(false);
        controller.update();

    } else if (!controller.enabled()) {

        controller.enabled(true);
        controller.update(true);
    }
};