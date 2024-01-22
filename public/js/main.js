// Function to load a common component
function loadComponent(componentPath, targetElementId) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetElementId).innerHTML = data;
        })
        .catch(err => console.error(err));
}

// When the DOM is fully loaded, load the components
document.addEventListener('DOMContentLoaded', function () {
    loadComponent('/common/navbar.html', 'navbar-placeholder');
    // Add more components as needed
});
