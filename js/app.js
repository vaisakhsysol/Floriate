

let screenWidth = window.innerWidth


document.addEventListener("DOMContentLoaded", function() {
    const yellowBar = document.querySelector('.yellowBar');
    const finalWidth = yellowBar.clientWidth + 680;
    setTimeout(function() {
        yellowBar.style.width = finalWidth + 'px';
    }, 100); 
});


if (screenWidth == 1440) {
    document.addEventListener("DOMContentLoaded", function() {
        const yellowBar = document.querySelector('.yellowBar');
        const finalWidth = yellowBar.clientWidth + 550;
        setTimeout(function() {
            yellowBar.style.width = finalWidth + 'px';
        }, 100); 
    });
}

if (screenWidth == 1366) {
    document.addEventListener("DOMContentLoaded", function() {
        const yellowBar = document.querySelector('.yellowBar');
        const finalWidth = yellowBar.clientWidth + 530;
        setTimeout(function() {
            yellowBar.style.width = finalWidth + 'px';
        }, 100); 
    });
}

if (screenWidth == 1024) {
    document.addEventListener("DOMContentLoaded", function() {
        const yellowBar = document.querySelector('.yellowBar');
        const finalWidth = yellowBar.clientWidth + 530;
        setTimeout(function() {
            yellowBar.style.width = finalWidth + 'px';
        }, 100); 
    });
}

if (screenWidth == 768) {
    document.addEventListener("DOMContentLoaded", function() {
        const yellowBar = document.querySelector('.yellowBar');
        const finalWidth = yellowBar.clientWidth + 530;
        setTimeout(function() {
            yellowBar.style.width = finalWidth + 'px';
        }, 100); 
    });
}

if (screenWidth <= 500) {
    document.addEventListener("DOMContentLoaded", function() {
        const yellowBar = document.querySelector('.yellowBar');
        const finalWidth = yellowBar.clientWidth + 300;
        setTimeout(function() {
            yellowBar.style.width = finalWidth + 'px';
        }, 100); 
    });
}

if (screenWidth <= 350) {
    document.addEventListener("DOMContentLoaded", function() {
        const yellowBar = document.querySelector('.yellowBar');
        const finalWidth = yellowBar.clientWidth + 200;
        setTimeout(function() {
            yellowBar.style.width = finalWidth + 'px';
        }, 100); 
    });
}