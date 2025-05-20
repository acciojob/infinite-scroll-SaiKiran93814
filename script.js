//your code here!

const list = document.getElementById('infinite-list');

// Counter to keep track of item numbers
let itemCount = 0;

// Function to create and append list items
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const item = document.createElement('li');
    item.textContent = `Item ${++itemCount}`;
    list.appendChild(item);
  }
}

// Add initial 10 items
addListItems(10);

// Listen for scroll event on window or container
window.addEventListener('scroll', () => {
  // Check if the user is near the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    addListItems(2); // Add 2 more items
  }
});
