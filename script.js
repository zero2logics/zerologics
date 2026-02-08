/* ===============================
   MOBILE MENU
================================ */
function openMenu() {
    document.getElementById("mobileMenu").style.left = "0";
  }
  
  function closeMenu() {
    document.getElementById("mobileMenu").style.left = "-100%";
  }
  
  /* ===============================
     HERO SLIDER
  ================================ */
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
  
  /* ===============================
     TESTIMONIAL SPLIDE
  ================================ */
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
  
  /* ===============================
     CONTACT FORM (LOCAL STORAGE)
  ================================ */
  const contactForm = document.getElementById("contactForm");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        time: new Date().toLocaleString()
      };
  
      let messages = JSON.parse(localStorage.getItem("messages")) || [];
      messages.push(data);
      localStorage.setItem("messages", JSON.stringify(messages));
  
      alert("Message sent successfully!");
      this.reset();
      window.location.href = "index.html";
    });
  }

  

//   const PASSWORD = "zero2logics@2026";
//   const userPass = prompt("Enter access password:");

//   if (!userPass || userPass !== PASSWORD) {
//     alert("Access Denied");
//     window.location.replace("index.html");
//   }



let messages = JSON.parse(localStorage.getItem("messages")) || [];
let container = document.getElementById("data");

if (messages.length === 0) {
container.innerHTML = "<p>No data found.</p>";
}

messages.forEach(msg => {
container.innerHTML += `
  <div class="card">
    <h3>${msg.name}</h3>
    <p><strong>Email:</strong> ${msg.email}</p>
    <p><strong>Subject:</strong> ${msg.subject}</p>
    <p>${msg.message}</p>
    <small>${msg.time}</small>
    <button class="btn btn-sm btn-danger deleteBtn mt-2">Delete</button>
  </div>
`;
});



// Get all delete buttons
document.querySelectorAll(".deleteBtn").forEach(button => {
button.addEventListener("click", function() {
// Confirm deletion
if (!confirm("Are you sure you want to delete this message?")) return;

// Get parent card and its index
const card = this.closest(".card");
const index = parseInt(card.getAttribute("data-index"));

// Remove from localStorage array
let messages = JSON.parse(localStorage.getItem("messages")) || [];
messages.splice(index, 1); // remove 1 item at position 'index'
localStorage.setItem("messages", JSON.stringify(messages));

// Remove card from DOM
card.remove();

// Optional: show message if no data left
if (messages.length === 0) {
document.getElementById("data").innerHTML = "<p>No data found.</p>";
}
});
});


  