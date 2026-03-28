const searchBtn     = document.getElementById('searchBtn');
const searchInput   = document.getElementById('searchInput');
const searchOverlay = document.getElementById('searchOverlay');

// Open search when button is clicked
searchBtn.addEventListener('click', function (e) {
  e.stopPropagation(); // prevent click from bubbling to document
  const isActive = searchInput.classList.contains('active');

  if (isActive) {
    closeSearch();
  } else {
    openSearch();
  }
});

// Close search when overlay is clicked
searchOverlay.addEventListener('click', function () {
  closeSearch();
});

// Close search when Escape key is pressed
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeSearch();
  }
});

// Prevent clicks inside the input from closing search
searchInput.addEventListener('click', function (e) {
  e.stopPropagation();
});

function openSearch() {
  searchInput.classList.add('active');
  searchOverlay.classList.add('active');
  searchInput.focus();
}

function closeSearch() {
  searchInput.classList.remove('active');
  searchOverlay.classList.remove('active');
  searchInput.value = '';
}
