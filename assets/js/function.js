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
      let progressValue = progressBar.value;
      progressValue = (progressValue*100)/10;

      // Calculate the dynamic conic-gradient value based on progressValue
      const dynamicConicGradient = `conic-gradient(#8152A1 ${progressValue}%, #EDEFED 0)`;

      // Set the background style for the scoreCircle element
      element.style.background = `radial-gradient(closest-side, white 90%, transparent 92% 100%), ${dynamicConicGradient}`;
    }
  });
};


var hamburgerOpen = document.getElementById("hamBurgerOpen");
var hamburgerClose = document.getElementById("hamBurgerClose");
var menuItemsContainer = document.querySelectorAll(".menuItemsContainer");

hamburgerOpen.addEventListener("click", function(){
  this.classList.remove("active");
  hamburgerClose.classList.add("active");

  for(var i = 0; i < menuItemsContainer.length; i++){
    menuItemsContainer[i].classList.add("active");
  }

});
hamburgerClose.addEventListener("click", function(){
  this.classList.remove("active");
  hamburgerOpen.classList.add("active");

  for(var x = 0; x < menuItemsContainer.length; x++){
    menuItemsContainer[x].classList.remove("active");
  }

});


// SearchBar

let searchBar = document.querySelector(".searchInput");
let searchOpenBtnIcon = document.querySelector(".searchIconSVG");
let searchCloseBtnIcon = document.querySelector(".searchCloseIconSVG");
let searchBarStyle = `margin-left: auto; width: 250px; padding: 8px 50px 8px 16px;`;

searchOpenBtnIcon.addEventListener("click", function(){
  searchBar.style = searchBarStyle;
  searchOpenBtnIcon.style.display = "none";
  searchCloseBtnIcon.style = `margin-right: 10px; display: block;`;
});

// Accordion

$(".accordion-title").click(function() {
  if ($(this).hasClass("active")) {
    // If the clicked element already has the "active" class, remove it and slide up
    $(this).removeClass("active").next().slideUp("600ms");
  } else {
    // If the clicked element doesn't have the "active" class, add it and slide down
    $(this).addClass("active").next().slideDown("600ms");

    // Remove the "active" class and slide up from other elements
    $(".accordion-title").not(this).removeClass("active").next().slideUp("600ms");
  }
});
