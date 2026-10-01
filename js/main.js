// JS scripts placed here

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (menuOpen == false) {
    navLinks.style.display = "block";
    menuOpen = true;
    }
    else if (menuOpen == true) {
    navLinks.style.display = "none";
    menuOpen = false;
    }
 });

 
// Function to toggle the gallery dropdown
function toggleGallery() {
  const menu = document.getElementById("galleryMenu");
  menu.classList.toggle("show");
}

// Close the gallery if the user clicks anywhere outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-trigger')) {
    const dropdowns = document.getElementsByClassName("gallery-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}