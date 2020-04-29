/**
 *
 * @param {*} top   距离值
 * 组件滚动固定
 */
function scrollToFix (top) {
    window.addEventListener('scroll', () => {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        const result = scrollTop > top
        return result
    })
}

export const util = {
    scrollToFix
}
