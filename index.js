// When the user clicks on the button, toggle between hiding and showing the dropdown content
function first40Dropdown() {
  document.getElementById("first40-dropdown").classList.toggle("show");
}

function biCDropdown() {
  document.getElementById("biC-dropdown").classList.toggle("show");
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
const biCModal = document.getElementById("index-biC-modal");

// Get the buttons that open the modals
const first40TestButton = document.getElementById("index-first40test-button");
const first40NeverendingButton = document.getElementById("index-first40neverending-button");
const biCButton = document.getElementById("index-biC-button");

// Get the <span> elements that close the modals
const first40TestSpan = document.getElementById("index-first40test-close");
const first40NeverendingSpan = document.getElementById("index-first40neverending-close");
const biCSpan = document.getElementById("index-biC-close");

// When the user clicks on the button, open the modals
first40TestButton.onclick = function() {
  first40TestModal.style.display = "block";
}

first40NeverendingButton.onclick = function() {
  first40NeverendingModal.style.display = "block";
}

biCButton.onclick = function() {
  biCModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modals
first40TestSpan.onclick = function() {
  first40TestModal.style.display = "none";
}

first40NeverendingSpan.onclick = function() {
  first40NeverendingModal.style.display = "none";
}

biCSpan.onclick = function() {
  biCModal.style.display = "none";
}

// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
  if (event.target == first40TestModal) {
    first40TestModal.style.display = "none";
  } else if (event.target == first40NeverendingModal) {
    first40NeverendingModal.style.display = "none";
  } else if (event.target == biCModal) {
    biCModal.style.display = "none";
  }
}
