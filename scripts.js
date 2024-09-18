if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
}

function acceptDisclaimer() {
    // Set a cookie/sessionStorage item
    sessionStorage.setItem('disclaimerAccepted', 'true');
    // Hide the disclaimer modal
    document.getElementById("disclaimerModal").style.display = "none";
}

function declineDisclaimer() {
    // Handle the decline action, such as redirecting to a different page
    window.location.href = '/taichiman/declined/';
}
