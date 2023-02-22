// Code snippet to check if jQuery and the custom JS are correctly loaded
console.log('[debug] script.js correctly loaded')
window.onload = function() {
    if (window.jQuery) {  
        console.log('[debug] jQuery correctly loaded')
    }
}

$(document).ready(function(){
});