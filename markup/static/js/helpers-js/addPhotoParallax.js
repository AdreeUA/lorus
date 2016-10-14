import ScrollMagic from 'scrollmagic';
import { forEach } from './forEach';
import { getCoords } from './getCoords';

export const addPhotoParallax = (block, controller) => {
    let photos = document.querySelectorAll('.photo');

    forEach(photos, (photo, ind) => {
        let photoWrapper = photo.querySelector('.photo__wrapper'),
            photoShadow = photo.querySelector('.photo__shadow'),
            tween,
            tween_m,
            offset = 0,
            triggerHook = 1,
            duration = '200%';

        if (ind === 0) {
            triggerHook = 0;
            offset = -parseInt(window.getComputedStyle(photo.closest(block)).paddingTop);
            tween = TweenMax.staggerTo([photoWrapper, photoShadow], 1, { y: '-40%' }, .3);

        } else if (ind === photos.length - 1) {

            let coords = getCoords(photo);

            tween = TweenMax.staggerFrom([photoWrapper, photoShadow], 1, { y: '35%' }, .3);
            duration = document.body.scrollHeight - coords.top;

        } else {
            tween = TweenMax.staggerFromTo([photoWrapper, photoShadow], 1, { y: '40%' }, { y: '-40%' }, .3);
        }

        new ScrollMagic.Scene({
                offset: offset,
                triggerElement: photo,
                duration: duration,
                triggerHook: triggerHook
            })
            .setTween(tween)
            .addTo(controller);

        // if (photo.classList.contains('service__photo-wrapper_m')) {
        //     if (ind === 0) {
        //         offset = 0;
        //     }

        //     new ScrollMagic.Scene({
        //             offset,
        //             triggerElement: photo,
        //             duration,
        //             triggerHook
        //         })
        //         .setTween(tween)
        //         .addTo(this.controller_m);
        // }
    });
}
