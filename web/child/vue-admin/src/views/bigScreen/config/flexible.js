(function(doc, win) {
    var docEl = doc.documentElement,baseFontSize = 100, designWidth = 1920,
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = baseFontSize * (clientWidth / designWidth) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener('resize', recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);