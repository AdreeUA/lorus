export const wrapLines = (str, tmpl) => {
    return str.replace(/.+$/gm, tmpl || "<span>$&</span>");
}
