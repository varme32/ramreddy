document.addEventListener("DOMContentLoaded", function () {
    const menuCheckbox = document.getElementById("check");
    const profilePhoto = document.getElementById("profilePhoto");
  
    // Add click event listener to menu items
    const menuItems = document.querySelectorAll(".menu-btn");
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", function () {
        // Toggle the mobile menu visibility
        menuCheckbox.checked = false;
      });
    });
  
    // Add resize event listener to adjust profile photo styling
    window.addEventListener("resize", function () {
      adjustProfilePhotoStyle();
    });
  
    // Initial adjustment for profile photo styling
    adjustProfilePhotoStyle();
  });
  
  function adjustProfilePhotoStyle() {
    const profilePhoto = document.getElementById("profilePhoto");
  
    // Check if it's in mobile view (adjust the width value accordingly)
    if (window.innerWidth <= 750) {
      profilePhoto.style.marginRight = "0"; // Adjust the margin or styling as needed
    } else {
      profilePhoto.style.marginRight = "40px"; // Reset the margin to its original value
    }
  }
  