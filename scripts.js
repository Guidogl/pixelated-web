// ************* START OF ENTER CARD BUTTON *****************
// Select all enter buttons
let enterButtons = document.querySelectorAll("#enter-button");

// Add event listener to all enter buttons
enterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // change the page based on the indetifier
    window.location.href = `pages/${button.name}.html`;
  });
});
// ************* END OF ENTER CARD BUTTON *****************

// ************* START OF REMOVE CARD BUTTON *****************
// Select all remove buttons
let closeButtons = document.querySelectorAll("#remove-button");

// Remove element helper function
function removeElement(element) {
  element.remove();
}

// Add event listener to all remove buttons
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let section = button.closest(".delayed-section");
    removeElement(section);
  });
});
// ************* END OF REMOVE CARD BUTTON *****************

// ************* START OF GSAP DELAY ANIMATION *****************
// Select delayed-section class elements for animation
let cardSections = document.querySelectorAll(".delayed-section");

// Loop through all delayed-section elements
cardSections.forEach((section) => {
  // Set up GSAP animation
  let imageAnim = gsap.to(section.querySelector(".content"), {
    y: "-100vh",
    ease: "none",
    paused: true,
  });

  // Set up GSAP progress animation
  let progressTo = gsap.quickTo(imageAnim, "progress", {
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
  });

  // Set up GSAP scroll trigger
  gsap.to(section.querySelector(".inner-container"), {
    y: "100vh",
    ease: "none",
    scrollTrigger: {
      scrub: true,
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => progressTo(self.progress),
    },
  });
});
// ************* END OF GSAP DELAY ANIMATION *****************

// *********** START OF BACK TO HOMEPAGE BUTTON **************
// Select back to homepage button. Selecting by class name.
let backButton = document.querySelector(".page-button");

// check if back button exists. It doesn't exist on index.html
if (backButton) {
  // Add event listener to back button
  backButton.addEventListener("click", () => {
    // change the page to index.html. It is the default page so / is enough.
    window.location.href = `/`;
  });
}

// ************* END OF BACK TO HOMEPAGE BUTTON **************
