/**
 * Initializes a dropdown menu with click event handling
 * @param {string} buttonSelector - CSS selector for the dropdown button
 * @param {string} contentSelector - CSS selector for the dropdown content that contains the options
 * @param {string} optionSelector - CSS selector for dropdown options
 */
function initDropdown(buttonSelector = ".dropdown-button", contentSelector = ".dropdown-content", optionSelector = ".dropdown-option") {
  try {
    const dropdownButton = document.querySelector(buttonSelector);
    const dropdownContent = document.querySelector(contentSelector);

    // Exit if required elements don't exist
    if (!dropdownButton || !dropdownContent) return;

    // Ensure dropdown starts hidden
    dropdownContent.classList.add("hidden");

    // Event listener for handling clicks
    document.addEventListener("click", (event) => {
      if (event.target.matches(buttonSelector)) {
        dropdownContent.classList.toggle("hidden");
      } else if (event.target.matches(optionSelector)) {
        dropdownContent.classList.add("hidden");
      } else if (
        !dropdownButton.contains(event.target) &&
        !dropdownContent.contains(event.target)
      ) {
        dropdownContent.classList.add("hidden");
      }
    });
  } catch (error) {
    console.error("Error initializing dropdown:", error);
  }
}

export { initDropdown };