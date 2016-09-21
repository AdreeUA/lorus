import '../plugins/gsap/ScrollToPlugin';
import { media } from './variables';
import { animateScroll } from './animations/animate-scroll';

export const setupScrollMagicAnchors = (controller) => {
    controller.scrollTo(function(newpos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
    });

    $(document).on("click", "a[href^='#']", function (e) {
        var id = $(this).attr("href");

        if ($(id).length > 0) {
            e.preventDefault();

            if (matchMedia(media.tablet).matches) {
                animateScroll({
                    element: document.querySelector(id),
                    offset: -document.querySelector('.header').offsetHeight
                });
            } else {
                controller.scrollTo(id);
            }

            // if supported by the browser we can even update the URL.
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }
    });
};
