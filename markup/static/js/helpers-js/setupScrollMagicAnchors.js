import '../plugins/gsap/ScrollToPlugin';

export const setupScrollMagicAnchors = (controller) => {
    controller.scrollTo(function(newpos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
    });

    $(document).on("click", "a[href^='#']", function (e) {
        var id = $(this).attr("href");

        if ($(id).length > 0) {
            e.preventDefault();

            // trigger scroll
            controller.scrollTo(id);

            // if supported by the browser we can even update the URL.
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }
    });
};
