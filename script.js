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
  currentYearElement.textContent = convertToRoman(currentYear);
});

function convertToRoman(num) {
  var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var result = '';

  for (var i = 0; i < arabicNumbers.length; i++) {
    while (num >= arabicNumbers[i]) {
      result += romanNumerals[i];
      num -= arabicNumbers[i];
    }
  }

  return result;
}