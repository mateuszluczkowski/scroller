document.addEventListener("DOMContentLoaded", function () {
  const rootElement = document.querySelector("#root");
  const sections = document.querySelectorAll("section");
  let currentSectionIndex = 0;
  let isThrottled = false;

  document.addEventListener("wheel", (event) => {
    if (isThrottled) return;
    isThrottled = true;
    setTimeout(() => (isThrottled = false), 1000);
    const direction = event.wheelDelta < 0 ? 1 : -1;
    scroll(direction);
  });
  function scrollToCurrentSection() {
    sections[currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  function scroll(direction) {
    if (direction === 1) {
      const isLastSection = currentSectionIndex === sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = currentSectionIndex === 0;
      if (isFirstSection) return;
    }
    currentSectionIndex += direction;
    scrollToCurrentSection();
  }
});
