fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

// Hozirgi sahifa nomini olish
const currentPage = window.location.pathname.split("/").pop().split(".")[0];

// Hozirgi sahifadagi navbar elementini faollashtirish
const activeLink = document.getElementById(currentPage);
if (activeLink) {
  activeLink.classList.add("text-blue-500", "font-bold"); // Oynaning faollashishini ko'rsatish uchun sinflar qo'shiladi
}

var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);