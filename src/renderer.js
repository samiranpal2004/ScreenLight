const slider = document.getElementById("brightness");
const topLight = document.getElementById("top-light");

slider.addEventListener("input", (e) => {
  const value = e.target.value;
  topLight.style.opacity = value / 100;
});
