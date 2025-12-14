// Highlight input on focus
/*const searchInput = document.querySelector('input');

searchInput.addEventListener('focus', () => {
    searchInput.style.backgroundColor = '#fff3e0';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.backgroundColor = 'white';
});

// Add fade-in animation to main content
window.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = 0;
    mainContent.style.transition = 'opacity 1.2s ease-in-out';
    setTimeout(() => {
        mainContent.style.opacity = 1;
    }, 100);
});*/

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LOGIN & SIGNUP ALERT
  ========================= */
  document.querySelectorAll("header ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
      const text = e.target.innerText.toLowerCase();
      if (text === "login" || text === "signup") {
        e.preventDefault();
        alert(text.toUpperCase() + " feature coming soon!");
      }
    });
  });

  /* =========================
     SEARCH FUNCTION
  ========================= */
  const searchInput = document.querySelector("input");
  const foodItems = document.querySelectorAll(".food-item");

  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    foodItems.forEach(item => {
      const name = item.querySelector("h3").innerText.toLowerCase();
      item.style.display = name.includes(value) ? "block" : "none";
    });
  });

  /* =========================
     ADD TO CART
  ========================= */
  let cartCount = 0;

  foodItems.forEach(item => {
    const btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.className = "cart-btn";
    item.appendChild(btn);

    btn.addEventListener("click", () => {
      cartCount++;
      alert(`Item added to cart 🛒\nTotal items: ${cartCount}`);
    });
  });

  /* =========================
     FAVORITE (HEART)
  ========================= */
  foodItems.forEach(item => {
    const heart = document.createElement("span");
    heart.innerHTML = "♡";
    heart.style.cursor = "pointer";
    heart.style.fontSize = "20px";
    heart.style.float = "right";

    item.prepend(heart);

    heart.addEventListener("click", () => {
      heart.innerHTML = heart.innerHTML === "♡" ? "❤️" : "♡";
    });
  });

  /* =========================
     DARK MODE TOGGLE
  ========================= */
  const darkBtn = document.createElement("button");
  darkBtn.innerText = "🌙 Dark Mode";
  darkBtn.style.position = "fixed";
  darkBtn.style.bottom = "20px";
  darkBtn.style.right = "20px";
  darkBtn.style.padding = "10px";
  darkBtn.style.cursor = "pointer";

  document.body.appendChild(darkBtn);

  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

});


