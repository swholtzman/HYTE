document.addEventListener('DOMContentLoaded', function() {
    const svgMenu = document.querySelector('.boxMenu');

    if (svgMenu) {
        // Toggle menu when clicked
        svgMenu.addEventListener('click', function(event) {
            svgMenu.classList.toggle('active');
            event.stopPropagation(); // Prevent click from bubbling up to the document level
        });

        // Close the menu when clicking anywhere else on the page
        document.addEventListener('click', function() {
            if (svgMenu.classList.contains('active')) {
                svgMenu.classList.remove('active');
            }
        });
    } else {
        console.error('SVG menu not found!');
    }
});
