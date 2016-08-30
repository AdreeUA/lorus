/**
 * Проверяет, находится ли элемент в области просмотра
 * @param {HTMLElement} elem - элемент
 * @returns {boolean}
 */
export const isInViewport = (elem, offset = 0) => {
    let coords = elem.getBoundingClientRect(),
        left = coords.left + offset,
        right = coords.right - offset,
        top = coords.top + offset,
        bottom = coords.bottom - offset;

    let windowHeight = document.documentElement.clientHeight,
        windowWidth = document.documentElement.clientWidth;

    // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима ИЛИ центральная
    // часть видима
    let topVisible = top > 0 && top < windowHeight,
        bottomVisible = bottom < windowHeight && bottom > 0,
        centerVertVisible = top <= 0 && bottom >= windowHeight,
        leftVisible = left > 0 && left < windowWidth,
        rightVisible = right < windowWidth && right > 0,
        centerHorVisible = left <= 0 && right >= windowWidth;

    return (topVisible || bottomVisible || centerVertVisible) && (leftVisible || rightVisible || centerHorVisible);
}
