const burgerMenu = document.getElementById('burgerMenu');
const navList = document.getElementById('navList');
const navLinks = document.querySelectorAll('.nav-list li');

burgerMenu.addEventListener('click', () => {
    // Toggle Nav
    navList.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burgerMenu.classList.toggle('toggle');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('nav-active');
        burgerMenu.classList.remove('toggle');
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    });
});

// Add to your main JS file
// Wellness Assessment Logic
document.getElementById('wellness-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get values and calculate
    const stressLevel = document.getElementById('stress-level').value;
    // Get other values...
    
    // Simple assessment logic
    let message = "";
    if (stressLevel > 3) {
      message += "Consider trying our stress management workshops. ";
    }
    // Add other conditionals...
    
    // Display results
    document.getElementById('results').innerHTML = `
      <h3>Your Wellness Insights</h3>
      <p>${message}</p>
      <a href="/resources" class="btn">Explore Resources</a>
    `;
    document.getElementById('results').classList.remove('hidden');
  });
  
  // Testimonial Carousel
  // Add simple JS for cycling testimonials