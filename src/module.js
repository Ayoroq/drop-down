function toggleDropdown() {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownContent = document.querySelector(".dropdown-content");
  const dropdownItems = document.querySelectorAll(".dropdown-option");

  dropdownButton.addEventListener("click", () => {
    dropdownContent.classList.toggle("hidden");
  });

    dropdownItems.forEach((item) => {
        item.addEventListener("click", () => {
        dropdownContent.classList.add("hidden");
        });
    });
}

export { toggleDropdown };