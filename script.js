// script.js

// Function to toggle between dark and light themes
function toggleTheme() {
  document.body.classList.toggle('dark-theme');

  // Save theme preference to localStorage
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  
  // Update button text based on theme
  const themeToggleButton = document.querySelector('nav button');
  if (themeToggleButton) {
    themeToggleButton.textContent = document.body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
  }
}

// Apply saved theme on page load and initialize button text
document.addEventListener('DOMContentLoaded', function() {
  // Theme initialization
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }
  
  // Set initial button text based on current theme
  const themeToggleButton = document.querySelector('nav button');
  if (themeToggleButton) {
    themeToggleButton.textContent = document.body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
  }

  // --- Project Image Carousel Logic ---
  const carousel = document.querySelector('.image-carousel');
  if (carousel) { // Check if the carousel exists
    let currentImageIndex = 0;
    const images = carousel.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    // Function to show a specific image
    function showImage(index) {
      images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
      });
    }

    // Function to go to the next image
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % totalImages;
      showImage(currentImageIndex);
    }

    // Initialize carousel: Show the first image
    showImage(currentImageIndex);

    // Set an interval to auto-advance images
    // Adjust the time (in milliseconds) for how long each image is displayed
    setInterval(nextImage, 3000); // Changes image every 3 seconds
  }
});

// Note: The form submission logic was removed from here, as Formspree handles it directly
// by the 'action' attribute on the form in index.html.
