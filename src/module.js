function toggleDropdown() {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownContent = document.querySelector(".dropdown-content");

  document.addEventListener("click", (event) => {
    if (event.target.matches(".dropdown-button")) {
      dropdownContent.classList.toggle("hidden");
    } else if (event.target.matches(".dropdown-option")) {
      dropdownContent.classList.add("hidden");
    } else if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.add("hidden");
    }
  });
}

export { toggleDropdown };