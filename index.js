document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello world");

  const rootElement = document.querySelector("#root");
  const sections = document.querySelectorAll("section");

  document.addEventListener("wheel", (event) => {
    console.log(event.wheelDelta);
  });
});
