document.addEventListener('DOMContentLoaded', function() {
    const scrollDownBtn = document.querySelector('.scroll-down-btn');
    scrollDownBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
  var currentYear = new Date().getFullYear();
  var currentYearElement = document.getElementById('current-year');
  currentYearElement.textContent = currentYear;
});
