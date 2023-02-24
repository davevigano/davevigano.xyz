// Code snippet to check if jQuery and the custom JS are correctly loaded
console.log('[debug] script.js correctly loaded')
window.onload = function() {
    if (window.jQuery) {  
        console.log('[debug] jQuery correctly loaded')
    }
}

$(document).ready(function(){
    // Loader
    function loader() {
        $('.loader').css('opacity', '0')
        $('#content').css('display', 'block')
    }
    $('.loader').css('opacity', '1')
    setTimeout(loader, 3000) // Change to 3000
});