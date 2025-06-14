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

      // Add your logic here (e.g., filter products)
      // For example:
      // filterProductsByCategory(selected);
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


