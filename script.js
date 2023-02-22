// Code snippet to check if jQuery and the custom JS are correctly loaded
console.log('[debug] script.js correctly loaded')
window.onload = function() {
    if (window.jQuery) {  
        console.log('[debug] jQuery correctly loaded')
    }
}

$(document).ready(function(){
    for (i=0; i<9; i++) {
        x = Math.random() * (90 - 0)
        y = Math.random() * (90 - 0)
        $('.background-img:nth-child('+i+')').css('top', y + 'vh')
        $('.background-img:nth-child('+i+')').css('left', x + 'vw')
    }
});