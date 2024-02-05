// Initialize a variable to keep track of the currently displayed project.
let currentProject = 0;

// Get all the elements with the class "project" and store them in an array.
const projects = document.querySelectorAll('.project');

// Function to show a specific project based on the given index.
function showProject(index) {
    // Loop through all the project elements.
    projects.forEach((project, idx) => {
        // If the current index matches the target index, display the project by setting its style to "block."
        // Otherwise, hide the project by setting its style to "none."
        project.style.display = idx === index ? 'block' : 'none';
    });
}

// Add a click event listener to the "Next" button.
document.getElementById('nextBtn').addEventListener('click', () => {
    // Increment the currentProject index and use the modulo operator (%) to cycle back to the first project
    // when the last project is reached. This allows for looping through the projects.
    currentProject = (currentProject + 1) % projects.length;

    // Call the showProject function to display the project corresponding to the updated index.
    showProject(currentProject);
});

// Add a click event listener to the "Previous" button.
document.getElementById('prevBtn').addEventListener('click', () => {
    // Decrement the currentProject index and use the modulo operator (%) to cycle back to the last project
    // when the first project is reached. This allows for looping through the projects in reverse order.
    currentProject = (currentProject - 1 + projects.length) % projects.length;

    // Call the showProject function to display the project corresponding to the updated index.
    showProject(currentProject);
});

// Show the first project initially by calling the showProject function with the currentProject index.
showProject(currentProject);
