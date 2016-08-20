/**
 * Высчитывает размеры скрытого элемента
 * @param {HTMLElement} element - элемент, размеры которого мы хотим получить
 * @returns {Object} - объект с свойствами width и height
 */
export const calcHiddenElementSize = (element) => {
    const size = {},
          pos = element.style.position,
          visibility = element.style.visibility,
          display = element.style.display,
          height = element.style.height,
          width = element.style.width;

    element.style.position = 'absolute';
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    element.style.height = 'auto';
    element.style.width = 'auto';

    size.height = element.clientHeight;
    size.width = element.clientWidth;

    element.style.position = pos;
    element.style.visibility = visibility;
    element.style.display = display;
    element.style.height = height;
    element.style.width = width;

    return size;
};
