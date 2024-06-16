// Select all the sections
const sections = document.querySelectorAll('section');

// Loop through each section
sections.forEach((section, index) => {
    // Add a delay to each section's animation start time
    section.style.animationDelay = `${index * 0.3}s`;
});