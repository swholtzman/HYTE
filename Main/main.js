document.addEventListener("DOMContentLoaded", () => {
    const phases = document.querySelectorAll(".phase");
    const descriptions = document.querySelectorAll(".description");
    let activeIndex = 0; // Start with the first phase as active
    let timer; // Declare a variable to store the interval ID

    const activatePhase = (index) => {
        phases.forEach((phase, idx) => {
            if (idx === index) {
                phase.classList.add("active");
                descriptions[idx].classList.add("active");
            } else {
                phase.classList.remove("active");
                descriptions[idx].classList.remove("active");
            }
        });
        resetTimer(); // Reset the timer whenever a phase is activated
    };

    const resetTimer = () => {
        clearInterval(timer); // Clear the existing interval
        timer = setInterval(() => { // Set a new interval
            activeIndex = (activeIndex + 1) % phases.length;
            activatePhase(activeIndex);
        }, 15000);
    };

    activatePhase(activeIndex); // Activate the first phase upon load

    phases.forEach((phase, index) => {
        phase.addEventListener('click', () => {
            activeIndex = index; // Update the current index on click
            activatePhase(activeIndex);
        });
    });

    resetTimer(); // Initialize the timer on page load
});
