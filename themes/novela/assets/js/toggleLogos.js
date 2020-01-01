window.addEventListener("resize", toggleLogo);

let lrw = window.matchMedia("(max-width: 850px)");
let law = window.matchMedia("(min-width: 850px)");

function toggleLogo() {
  if (lrw.matches) {
    document.getElementById("logo-mobile").classList.remove("hidden");
    document.getElementById("logo-desktop").classList.add("hidden");
  } else if (law.matches) {
    document.getElementById("logo-mobile").classList.add("hidden");
    document.getElementById("logo-desktop").classList.remove("hidden");
  }
}
