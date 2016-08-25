export let transitionEnd;

let i,
    el = document.createElement('div'),
    transitions = {
        'OTransition': 'otransitionend',  // oTransitionEnd in very old Opera
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd',
        'transition': 'transitionend'
    };

transitionEnd = false;

for (i in transitions) {
    if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
        transitionEnd = transitions[i];
    }
}
