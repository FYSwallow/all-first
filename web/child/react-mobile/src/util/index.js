(function (doc, win) {
    const docEl = doc.documentElement
    const baseFontSize = 100
    const designWidth = 750
    const resizeHandler = function () {
        const clientWidth = docEl.clientWidth
        if (!clientWidth) return
        docEl.style.fontSize = baseFontSize * (clientWidth / designWidth) + 'px'
    }
    if (!doc.addEventListener) return
    win.addEventListener('resize', resizeHandler, false)
    doc.addEventListener('DOMContentLoaded', resizeHandler, false)
})(document, window)
