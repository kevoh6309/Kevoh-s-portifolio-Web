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

// Function to download resume
function downloadResume() {
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = 'assets/Kevoh_Resume.pdf'; // You'll need to create this file
  link.download = 'Kevoh_Mutwiri_Resume.pdf';
  link.target = '_blank';
  
  // Fallback: Open a new tab with resume info if PDF doesn't exist
  window.open('https://docs.google.com/document/d/your-resume-link/edit', '_blank');
  
  // Show a notification
  showNotification('Resume download started! 📄');
}

// Function to show notifications
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: #28a745;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
  `;
  
  // Add animation keyframes
  if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Function to animate progress bars
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach(bar => {
    const skillLevel = bar.getAttribute('data-skill');
    bar.style.width = skillLevel + '%';
  });
}

// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll animations
function handleScrollAnimations() {
  const skillsSection = document.getElementById('skills');
  if (skillsSection && isInViewport(skillsSection)) {
    animateProgressBars();
    // Remove scroll listener after animation
    window.removeEventListener('scroll', handleScrollAnimations);
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

  // Initialize progress bar animations on scroll
  window.addEventListener('scroll', handleScrollAnimations);
  
  // Also trigger once in case skills section is already visible
  setTimeout(handleScrollAnimations, 500);

  // Add smooth scrolling to all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add typing effect to hero section
  const heroHeading = document.querySelector('#home .test-head');
  if (heroHeading) {
    const originalText = heroHeading.textContent;
    heroHeading.textContent = '';
    let i = 0;
    
    function typeWriter() {
      if (i < originalText.length) {
        heroHeading.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    
    setTimeout(typeWriter, 500);
  }
});

// Note: The form submission logic was removed from here, as Formspree handles it directly
// by the 'action' attribute on the form in index.html.
