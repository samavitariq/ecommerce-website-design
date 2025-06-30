// Function to set up dropdown functionality
  function setupDropdown(toggleId, menuId, type = "text") {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    const wrapper = toggle.closest('.dropdown-wrapper');

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelectorAll('.dropdown-wrapper').forEach(el => {
        if (el !== wrapper) el.classList.remove('show');
      });
      wrapper.classList.toggle('show');
    });

    menu.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();

        if (type === "text") {
          // Replace full innerHTML (for language dropdown)
          const newContent = item.innerHTML;
          toggle.innerHTML = newContent + ' <i class="fa fa-caret-down"></i>';
        } else if (type === "flag") {
          // Replace only the flag image source
          const newFlag = item.getAttribute('data-flag');
          const flagImg = toggle.querySelector('#selected-flag');
          if (flagImg) flagImg.src = newFlag;
        }

        wrapper.classList.remove('show');
      });
    });

    document.addEventListener("click", () => {
      wrapper.classList.remove('show');
    });
  }

  // Apply dropdown logic
  setupDropdown("lang-toggle", "lang-menu", "text");
  setupDropdown("country-toggle", "country-menu", "flag");
 function setupDropdownWithSelection(toggleId, menuId) {
  const toggle = document.getElementById(toggleId);
  const menu = document.getElementById(menuId);
  const wrapper = toggle.closest(".dropdown-wrapper");

  // Toggle dropdown
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".dropdown-wrapper").forEach((el) => {
      if (el !== wrapper) el.classList.remove("show");
    });
    wrapper.classList.toggle("show");
  });

  // Handle selection
  menu.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      const selected = item.getAttribute("data-category");
      console.log("Selected category:", selected);
      wrapper.classList.remove("show");
    });
  });

  document.addEventListener("click", () => {
    wrapper.classList.remove("show");
  });
}
// Call the function
setupDropdownWithSelection("category-toggle", "category-menu");
  // Set the end date
  const endDate = new Date("2025-06-30T23:59:59").getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
//quote form submission handler
document.getElementById("quoteForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Inquiry sent successfully!");
});
// Language switcher functionality
  const langSwitcher = document.getElementById("langSwitcher");
  const langList = document.getElementById("language-options");
  const currentLang = document.getElementById("current-language");
  const langFlag = document.getElementById("lang-flag");

  langSwitcher.addEventListener("click", () => {
    langList.style.display = langList.style.display === "block" ? "none" : "block";
  });

  function changeLanguage(language, flagFile) {
    currentLang.textContent = language;
    langFlag.src = `assets/${flagFile}`;
    langList.style.display = "none";
  }

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!langSwitcher.contains(e.target)) {
      langList.style.display = "none";
    }
  });
// Newsletter form submission handler
  document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.querySelector('.newsletter-form');

    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual form submission

      const email = newsletterForm.querySelector('input[name="email"]').value.trim();

      if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      alert('Thank you for subscribing to our newsletter!');
      newsletterForm.reset(); // Clear the input
    });

    // Simple email validation
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });

  // Filter checkboxes
  const filterCheckboxes = document.querySelectorAll('.filter-check');
  filterCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      alert('Filtering by: ' + cb.dataset.filter);
    });
  });

  // Price range
  document.getElementById('applyPrice').addEventListener('click', () => {
    const min = document.getElementById('minPrice').value;
    const max = document.getElementById('maxPrice').value;
    alert('Filtering products between $' + min + ' and $' + max);
  });

  // Rating filters
  const ratings = document.querySelectorAll('.rating');
  ratings.forEach(star => {
    star.addEventListener('click', () => {
      alert('Filtering products with rating: ' + star.dataset.stars + ' stars');
    });
  });
function toggleSection(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('i');
    if (!content || !icon) return;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-right');
  }
  function toggleMoreCategories(e) {
  e.preventDefault();

  const link = e.target;
  const parentList = link.closest('ul');
  const extras = parentList.querySelectorAll('.extra-category');

  extras.forEach(el => {
    el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
  });

  link.innerText = (link.innerText === 'See all') ? 'Show less' : 'See all';
}
  // Initialize: hide all extra-category by default
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.extra-category').forEach(el => el.style.display = 'none');
  });

 
