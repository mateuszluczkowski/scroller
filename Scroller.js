class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = document.querySelectorAll("section");
    const sectionsArr = Array.prototype.slice.call(this.sections);
    const currentSectionIndex = sectionsArr.findIndex(this.isScrolledIntoView);
    this.currentSectionIndex =
      currentSectionIndex < 0 ? 0 : currentSectionIndex;
    this.isThrottled = false;
    this.isScrolledIntoView(this.sections[0]);
  }

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = Math.floor(rect.bottom);
    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    return isVisible;
  }

  listenScroll = (event) => {
    if (this.isThrottled) return;
    this.isThrottled = true;
    setTimeout(() => (this.isThrottled = false), 1000);
    const direction = event.wheelDelta < 0 ? 1 : -1;
    this.scroll(direction);
  };
  scroll = (direction) => {
    if (direction === 1) {
      const isLastSection =
        this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = this.currentSectionIndex === 0;
      if (isFirstSection) return;
    }
    this.currentSectionIndex += direction;
    this.scrollToCurrentSection();
  };
  scrollToCurrentSection = () => {
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
}
