import { media } from './variables';

export const toggleController = (controller1, controller2) => {
    if (matchMedia(media.tablet).matches) {
        if (controller1.enabled()) {
            TweenMax.set('.js-tween', { clearProps: 'all' });
            controller1.enabled(false);
            controller1.update();
        }

        if (controller2 && !controller2.enabled()) {
            controller2.enabled(true);
            controller2.update(true);
        }

    } else {

        if (!controller1.enabled()) {
            TweenMax.set('.js-tween', { clearProps: 'all' });
            controller1.enabled(true);
            controller1.update(true);
        }

        if (controller2 && controller2.enabled()) {
            controller2.enabled(false);
            controller2.update();
        }
    }
};
