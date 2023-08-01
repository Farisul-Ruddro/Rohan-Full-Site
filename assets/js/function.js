// Get all elements with class name "scoreCircle"
const scoreCircleMain = document.querySelectorAll(".scoreCircle");

// Check if there are any elements with class name "scoreCircle"
if(scoreCircleMain.length > 0) {

  // Loop through each progress bar element
  scoreCircleMain.forEach((element) => {
    const progressBar = element.querySelector('progress');

    // Check if a progress bar element is found
    if(progressBar) {
      // Get the value of the progress bar
      const progressValue = progressBar.value;

      // Calculate the dynamic conic-gradient value based on progressValue
      const dynamicConicGradient = `conic-gradient(#8152A1 ${progressValue}%, #EDEFED 0)`;

      // Set the background style for the scoreCircle element
      element.style.background = `radial-gradient(closest-side, white 90%, transparent 92% 100%), ${dynamicConicGradient}`;
    }
  });
}
