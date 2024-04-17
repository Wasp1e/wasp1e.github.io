var modal = document.getElementById("myModal");
var butn = document.querySelectorAll(".openModalBtn");

butn.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("fadeOut");
    modal.style.display = "block";
  });
});

document.getElementById("closeModalBtn").onclick = function () {
  modal.classList.add("fadeOut");
  setTimeout(function () {
    modal.style.display = "none";
  }, 200); // 400ms - длительность анимации
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add("fadeOut");
    setTimeout(function () {
      modal.style.display = "none";
    }, 200); // 400ms - длительность анимации
  }
};
