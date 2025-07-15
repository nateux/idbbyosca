document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      // At top of page
      navbar.classList.remove('hide');
      return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('hide')) {
      // Scrolling down
      navbar.classList.add('hide');
    } else if (currentScroll < lastScroll && navbar.classList.contains('hide')) {
      // Scrolling up
      navbar.classList.remove('hide');
    }
    
    lastScroll = currentScroll;
  });
});