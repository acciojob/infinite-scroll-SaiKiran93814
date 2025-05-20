const list = document.getElementById('infi-list');
let itemCount = 0;

// Function to add list items
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addListItems(10);

// Add 2 more items when scrolled to bottom
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    addListItems(2);
  }
});

