// Get DOM elements
const searchInput = document.querySelector(".search input[type='text']");
const searchButton = document.querySelector(".search button");
const cards = document.querySelectorAll(".card");

// Event listener for search button click
searchButton.addEventListener("click", function() {
  searchCards();
});

// Event listener for enter key press in search input
searchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    searchCards();
  }
});

// Function to search and filter cards by title
function searchCards() {
  const searchTerm = searchInput.value.toLowerCase();

  cards.forEach(function(card) {
    const title = card.querySelector("h2").textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
