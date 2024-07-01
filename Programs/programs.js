document.addEventListener('DOMContentLoaded', function() {
    function setupCourse(courseId) {
        const course = document.getElementById(courseId);
        if (!course) return; // Exit if course element is not found

        const expansionButton = course.querySelector('.expansionButton');

        // Initially set everything to active
        course.classList.add('active');
        const elementsToActivate = course.querySelectorAll('.circles, .innerContent, .expansionButton');
        elementsToActivate.forEach(element => {
            element.classList.add('active');
        });

        // Toggle on click
        expansionButton.addEventListener('click', function() {
            course.classList.toggle('active');
            elementsToActivate.forEach(element => {
                element.classList.toggle('active');
            });
        });
    }

    // Function to handle screen width changes
    function handleScreenWidthChange() {
        const courses = ['mainCourse', 'sustainabilityCourse'];
        const screenWidth = window.innerWidth;

        courses.forEach(courseId => {
            const course = document.getElementById(courseId);
            if (!course) return;

            const elementsToActivate = course.querySelectorAll('.circles, .innerContent, .expansionButton');

            if (screenWidth <= 1100) {
                // Set to inactive
                course.classList.remove('active');
                elementsToActivate.forEach(element => {
                    element.classList.remove('active');
                });
            } else {
                // Set to active
                course.classList.add('active');
                elementsToActivate.forEach(element => {
                    element.classList.add('active');
                });
            }
        });
    }

    // Initial setup
    setupCourse('mainCourse');
    setupCourse('sustainabilityCourse');

    // Check screen width on load
    handleScreenWidthChange();

    // Add resize event listener
    window.addEventListener('resize', handleScreenWidthChange);
});
