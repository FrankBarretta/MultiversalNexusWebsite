document.getElementById('zoom-btn').addEventListener('click', function() {
    document.querySelector('.container_background').style.transform = 'scale(10)';
    setTimeout(function() {
        document.getElementById('zoom-btn').style.opacity = '0';
    }, 1000);  // 2000 milliseconds = 2 seconds after the click
    setTimeout(function() {
        window.location.href = './server/Multiverse_Nexus/multiverse_nexus.html';
    }, 3500);  // 5000 milliseconds = 5 seconds after the click
});

// Prevent scrolling with mouse
window.addEventListener('wheel', function(e) {
e.preventDefault();
}, { passive: false });

// Prevent scrolling with touch
window.addEventListener('touchmove', function(e) {
e.preventDefault();
}, { passive: false });