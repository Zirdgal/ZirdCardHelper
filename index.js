/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("first40-dropdown").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdowns = document.getElementsByClassName("index-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Get the modals
const first40TestModal = document.getElementById("index-first40test-modal");
const first40NeverendingModal = document.getElementById("index-first40neverending-modal");
// Get the button that opens the modals
const first40TestButton = document.getElementById("index-first40test-button");
const first40NeverendingButton = document.getElementById("index-first40neverending-button");
// Get the <span> elements that closes the modals
const first40TestSpan = document.getElementById("index-first40test-close");
const first40NeverendingSpan = document.getElementById("index-first40neverending-close");
// When the user clicks on the button, open the modals
first40TestButton.onclick = function() {
  first40TestModal.style.display = "block";
}
first40NeverendingButton.onclick = function() {
  first40NeverendingModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modals
first40TestSpan.onclick = function() {
  first40TestModal.style.display = "none";
}
first40NeverendingSpan.onclick = function() {
  first40NeverendingModal.style.display = "none";
}
// When the user clicks anywhere outside of the modals, close it
window.onclick = function(event) {
  if (event.target == first40TestModal) {
    first40TestModal.style.display = "none";
  } else if (event.target == first40NeverendingModal) {
    first40NeverendingModal.style.display = "none";
  }
}
  // thanks to w3 xoxo