document
  .getElementById("themeColorButton")
  .addEventListener("click", toggleColors);

let bodyElement = document.getElementsByTagName("BODY")[0];
let moonOrSun = document.getElementById("moonOrSun");
let sunRays = document.getElementById("sunRays");
let moonMask = document.getElementById("moonMask");

initAnimation();

function initAnimation() {
  if (localStorage.getItem("isDark") === "true") {
    moonMask.style.top = "-25px";
    moonMask.style.right = "-15px";
    moonOrSun.style.transform = "scale(0.5)";
    sunRays.style.transform = "scale(0.6)";
  } else {
    moonMask.style.top = "-8px";
    moonMask.style.right = "-5px";
    moonOrSun.style.transform = "scale(1)";
    sunRays.style.transform = "scale(0.1)";
  }
}

function toggleColors() {
  if (localStorage.getItem("isDark") === "true") {
    makeLight();
    moonMask.classList.add("mask-to-moon-animation");
    moonOrSun.classList.add("to-moon-animation");
    sunRays.classList.add("contract-rays");

    setTimeout(function() {
      sunRays.classList.remove("contract-rays");
    }, 500);
    setTimeout(function() {
      moonMask.classList.remove("mask-to-moon-animation");
      moonOrSun.classList.remove("to-moon-animation");
      sunRays.classList.remove("contract-rays");
      initAnimation();
    }, 400);
    localStorage.setItem("isDark", "false");
  } else {
    makeDark();
    moonMask.classList.add("mask-to-sun-animation");
    moonOrSun.classList.add("to-sun-animation");
    sunRays.classList.add("expand-rays");

    setTimeout(function() {
      sunRays.classList.remove("expand-rays");
    }, 500);
    setTimeout(function() {
      moonMask.classList.remove("mask-to-sun-animation");
      moonOrSun.classList.remove("to-sun-animation");
      initAnimation();
    }, 400);

    localStorage.setItem("isDark", "true");
  }
}

function makeDark() {
  bodyElement.style.setProperty("--primary", "");
  bodyElement.style.setProperty("--secondary", "");
  bodyElement.style.setProperty("--grey", "");
  bodyElement.style.setProperty("--background-color", "");
  bodyElement.style.setProperty("--accent", "");
  bodyElement.style.setProperty("--hover", "");
  bodyElement.style.setProperty("--articleText", "");
  bodyElement.style.setProperty("--track", "");
  bodyElement.style.setProperty("--progress", "");
  bodyElement.style.setProperty("--card", "");
  bodyElement.style.setProperty("--error", "");
  bodyElement.style.setProperty("--success", "");
  bodyElement.style.setProperty("--errorBackground", "");
  bodyElement.style.setProperty("--horizontalRule", "");
  bodyElement.style.setProperty("--inputBackground", "");
  bodyElement.style.setProperty("--tooltip", "");
}

function makeLight() {
  bodyElement.style.setProperty("--primary", "#222222");
  bodyElement.style.setProperty("--secondary", "#73737d");
  bodyElement.style.setProperty("--grey", "#44444b");
  bodyElement.style.setProperty("--background-color", "#fafafa");
  bodyElement.style.setProperty("--accent", "#6166dc");
  bodyElement.style.setProperty("--hover", "rgba(0, 0, 0, 0.07)");
  bodyElement.style.setProperty("--articleText", "#08080b");
  bodyElement.style.setProperty("--track", "rgba(8, 8, 11, 0.3)");
  bodyElement.style.setProperty("--progress", "#000");
  bodyElement.style.setProperty("--card", "#fff");
  bodyElement.style.setProperty("--error", "#ee565b");
  bodyElement.style.setProperty("--success", "#46b17b");
  bodyElement.style.setProperty("--errorBackground", "rgba(238, 86, 91, 0.1)");
  bodyElement.style.setProperty("--horizontalRule", "rgba(8, 8, 11, 0.15)");
  bodyElement.style.setProperty("--inputBackground", "rgba(0, 0, 0, 0.05)");
  bodyElement.style.setProperty("--tooltip", "lightgrey");
}
