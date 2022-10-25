const links = document.querySelector(".social-media-links-container");
console.log(links);
const shareButton = document.querySelector(".share-btn");

shareButton.addEventListener("click", function () {
  links.classList.toggle("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!links.classList.contains("hidden")) {
      links.classList.remove("hidden");
    }
  }
});
