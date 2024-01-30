
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

let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')

hamburger.addEventListener("click",()=>{
    menu.classList.toggle('active')
    hamburger.classList.toggle('active')

})

document.addEventListener("DOMContentLoaded", function () {
    // Call showContent for the first tab (in this case, 'ONE')
    showContent('ONE');
});

function showContent(tabName) {
    // Hide all content elements
    var contentElements = document.querySelectorAll('.content');
    contentElements.forEach(function (element) {
        element.style.display = 'none';
    });

    // Show the selected content element
    var selectedContent = document.getElementById('content-' + tabName);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }


    // // Add 'active' class and set background color to green for the selected card
    var selectedCard = document.querySelector('.card[data-tab="' + tabName + '"]');
    if (selectedCard) {
        selectedCard.classList.add('active');
        selectedCard.style.backgroundColor = 'green';
    }

    // Remove 'active' class and reset background color from all cards
    var cardElements = document.querySelectorAll('.card');
    cardElements.forEach(function (element) {
        element.classList.remove('active');
        // element.style.backgroundColor = $accentColor; // Reset background color
    });

    
} 


function selectTab(tabId) {
    var tabs = document.querySelectorAll('.card');
    
    tabs.forEach(function(tab) {
        tab.classList.remove('selected'); // Remove 'selected' class from all tabs
    });

    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('selected'); // Add 'selected' class to the clicked tab
}


let generalBtn = document.querySelector("#generalBtn")
let docsBtn = document.querySelector("#docsBtn")
let resultBtn = document.querySelector("#resultBtn")
let staffBtn = document.querySelector("#staffBtn")
let infraBtn = document.querySelector("#infraBtn")
let detailsBtn = document.querySelector("#detailsBtn")

// let general = document.querySelector("#general")

generalBtn.addEventListener('click',()=>{
    window.scrollTo(0, 300);
})
docsBtn.addEventListener('click',()=>{
    window.scrollTo(0, 900);
})
resultBtn.addEventListener('click',()=>{
    window.scrollTo(0, 1500);
})
staffBtn.addEventListener('click',()=>{
    window.scrollTo(0, 2800);
})
infraBtn.addEventListener('click',()=>{
    window.scrollTo(0, 3300);
})
detailsBtn.addEventListener('click',()=>{
    window.scrollTo(0, 3750);
})

let mobGeneralBtn = document.querySelector("#mobGeneralBtn")
let mobDocsBtn = document.querySelector("#mobDocsBtn")
let mobResBtn = document.querySelector("#mobResBtn")
let mobStaffBtn = document.querySelector("#mobStaffBtn")
let mobInfraBtn = document.querySelector("#mobInfraBtn")
let mobCurrBtn = document.querySelector("#mobCurrBtn")

mobGeneralBtn.addEventListener('click',()=>{
    window.scrollTo(0, 300);
})

mobDocsBtn.addEventListener('click',()=>{
    window.scrollTo(0, 900);
})

mobResBtn.addEventListener('click',()=>{
    window.scrollTo(0, 1300);
})

mobStaffBtn.addEventListener('click',()=>{
    window.scrollTo(0, 2800);
})

mobInfraBtn.addEventListener('click',()=>{
    window.scrollTo(0, 3400);
})

mobCurrBtn.addEventListener('click',()=>{
    window.scrollTo(0, 3950);
})

document.addEventListener('DOMContentLoaded', function () {
    
    var buttons = document.querySelectorAll('.generalMobBtn');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          
            buttons.forEach(function (btn) {
                btn.style.backgroundColor = "#F0F3BD"; 
            });

          
            button.style.backgroundColor = "#006D77"; 
        });
    });
});
