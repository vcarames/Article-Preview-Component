const links = document.querySelector(".social-media-links-container");
const shareButton = document.querySelector(".share-btn");

shareButton.addEventListener("click", function () {
  links.classList.toggle("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!links.classList.contains("hidden")) {
      links.classList.add("hidden");
    }
  }
});
