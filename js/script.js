"use strict";
let content = document.querySelector(".cat-item:nth-child(n+7)");
let show = document.querySelector(".btn-more");

show.addEventListener("click", () => {
    if (content.style.display === "block") {
        content.style.display = "none";

    } else {
        content.style.display = "block";
    }
});
var top_show = 150;
var delay = 1000; // 
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > top_show) $('.btn-up').fadeIn();
        else $('.btn-up').fadeOut();
    });
    $('.btn-up').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});