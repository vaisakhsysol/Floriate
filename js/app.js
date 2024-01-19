
document.addEventListener("DOMContentLoaded", function() {
    const yellowBar = document.querySelector('.yellowBar');
    const finalWidth = yellowBar.clientWidth + 680;
    setTimeout(function() {
        yellowBar.style.width = finalWidth + 'px';
    }, 100); 
});
