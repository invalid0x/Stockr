window.addEventListener('scroll', function () {
    var pricingContainer = document.getElementById('pricing-container');
    var pricingSection = document.getElementById('pricing');
  
    var scrollPosition = window.scrollY + window.innerHeight;
    var triggerPosition = pricingSection.offsetTop + (pricingSection.offsetHeight / 2);
  
    if (scrollPosition > triggerPosition) {
      pricingContainer.classList.add('show');
    } else {
      pricingContainer.classList.remove('show');
    }
  });
  