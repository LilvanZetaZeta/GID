document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.getElementById('carousel-inner');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const items = carouselInner.children;
    const totalItems = items.length;
    let currentIndex = 0;
  
    function updateCarousel() {
      const itemWidth = items[0].offsetWidth;
      const offset = -currentIndex * itemWidth;
      carouselInner.style.transform = `translateX(${offset}px)`;
    }
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems; // 👈 corrección
      updateCarousel();
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    });
  
    updateCarousel();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });