document.addEventListener("DOMContentLoaded", function () {
  const scroller = new Scroller("#root");
  document.addEventListener("wheel", scroller.listenScroll);

  document.addEventListener("swipeUp", () => {
    scroller.scroll(1);
  });
  document.addEventListener("swipeDown", () => {
    scroller.scroll(-1);
  });
});
