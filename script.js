
function openMenu() {
    document.getElementById("mobileMenu").style.left = "0";
  }
  
  function closeMenu() {
    document.getElementById("mobileMenu").style.left = "-100%";
  }
  
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  
  let current = 0;
  
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }
  
  if (slides.length) {
    nextBtn.onclick = () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    };
  
    prevBtn.onclick = () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    };
  
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 4000);
  }
  

  $(document).ready(function () {
    if (document.getElementById("splide")) {
      new Splide('#splide', {
        type: 'loop',
        perPage: 3,
        gap: '1.5rem',
        autoplay: true,
        pauseOnHover: true,
        breakpoints: {
          1024: { perPage: 2 },
          768: { perPage: 1 }
        }
      }).mount();
    }
  });
  
  
 document.getElementById("contactForm").addEventListener("submit", function () {
    alert("Thank you! Your message has been sent successfully.");
  });

  