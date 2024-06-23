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

    // Setup courses
    setupCourse('mainCourse');
    setupCourse('sustainabilityCourse');
});
