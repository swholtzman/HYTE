document.addEventListener('DOMContentLoaded', function() {
    // Elements for mainCourse
    const mainCourse = document.getElementById('mainCourse');
    const circlesMain = mainCourse.querySelector('.circles');
    const expansionButtonMain = mainCourse.querySelector('.expansionButton');

    // Elements for sustainabilityCourse
    const sustainabilityCourse = document.getElementById('sustainabilityCourse');
    const circlesSustainability = sustainabilityCourse.querySelector('.circles');
    const expansionButtonSustainability = sustainabilityCourse.querySelector('.expansionButton');

    // Add active class to start as active
    mainCourse.classList.add('active');
    circlesMain.classList.add('active');
    expansionButtonMain.classList.add('active');

    sustainabilityCourse.classList.add('active');
    circlesSustainability.classList.add('active');
    expansionButtonSustainability.classList.add('active');

    // Event listeners for mainCourse
    expansionButtonMain.addEventListener('click', function() {
        mainCourse.classList.toggle('active');
        circlesMain.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Event listeners for sustainabilityCourse
    expansionButtonSustainability.addEventListener('click', function() {
        sustainabilityCourse.classList.toggle('active');
        circlesSustainability.classList.toggle('active');
        this.classList.toggle('active');
    });
});
