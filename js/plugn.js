/* global console, $ */
var $, console;

$(function () {

    "use strict";

    $(".navbar .nav-link").click(function (e) {
        
        e.preventDefault();
        
        $('html, body').animate({
            
            screenTop: $('#' + $(this).data('scroll')).offset().top
            
        }, 1500);
        
        window.console.log('#' + $(this).data('scroll'));
        
    });

});