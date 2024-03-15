document.addEventListener("DOMContentLoaded", function () {
    const breadInfoContainer = document.getElementById("breadInfoContainer");
  
    const menuItems = document.querySelectorAll(".menu-item");
  
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", function () {
        const breadName = menuItem.querySelector("h3").textContent;
        const breadDescription = menuItem.querySelector("p").textContent;
        const breadImageUrl = menuItem.style.backgroundImage.slice(5, -2);
  
        const breadInfoContent = `
          <h2>${breadName}</h2>
          <img src="${breadImageUrl}" alt="${breadName}" class="img-fluid">
          <p>${breadDescription}</p>
        `;
  
        const breadInfoContentDiv = document.getElementById("breadInfoContent");
        breadInfoContentDiv.innerHTML = breadInfoContent;
  
        breadInfoContainer.classList.remove("d-none");
      });
    });
  
    const mainMenuBtn = document.getElementById("mainMenuBtn");
    mainMenuBtn.addEventListener("click", function () {
      breadInfoContainer.classList.add("d-none");
    });
  });
  