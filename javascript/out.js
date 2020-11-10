/* global document, window */
var el = document.getElementById('arrow');
window.onscroll = function () {
    'use strict';
    if (window.pageYOffset >= 500) {
        el.style.fontSize = '50px';
        el.addEventListener('click', function () {
            window.scrollTo(0, 0);
        });
    } else if (window.pageYOffset < 500) {
        el.style.fontSize = '0px';
    }
};