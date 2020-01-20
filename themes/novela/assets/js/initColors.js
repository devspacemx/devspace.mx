let be = document.getElementsByTagName("BODY")[0];

initColors();

function initColors() {
  if (localStorage.getItem("isDark") === null) {
    localStorage.setItem("isDark", "true");
  }
  if (localStorage.getItem("isDark") === "true") {
    makeDark();
  } else {
    makeLight();
  }
}

function makeDark() {
  be.style.setProperty("--primary", "");
  be.style.setProperty("--secondary", "");
  be.style.setProperty("--grey", "");
  be.style.setProperty("--background-color", "");
  be.style.setProperty("--accent", "");
  be.style.setProperty("--hover", "");
  be.style.setProperty("--articleText", "");
  be.style.setProperty("--track", "");
  be.style.setProperty("--progress", "");
  be.style.setProperty("--card", "");
  be.style.setProperty("--error", "");
  be.style.setProperty("--success", "");
  be.style.setProperty("--errorBackground", "");
  be.style.setProperty("--horizontalRule", "");
  be.style.setProperty("--inputBackground", "");
  be.style.setProperty("--tooltip", "");
}

function makeLight() {
  be.style.setProperty("--primary", "#222222");
  be.style.setProperty("--secondary", "#73737d");
  be.style.setProperty("--grey", "#44444b");
  be.style.setProperty("--background-color", "#fafafa");
  be.style.setProperty("--accent", "#6166dc");
  be.style.setProperty("--hover", "rgba(0, 0, 0, 0.07)");
  be.style.setProperty("--articleText", "#08080b");
  be.style.setProperty("--track", "rgba(8, 8, 11, 0.3)");
  be.style.setProperty("--progress", "#000");
  be.style.setProperty("--card", "#fff");
  be.style.setProperty("--error", "#ee565b");
  be.style.setProperty("--success", "#46b17b");
  be.style.setProperty("--errorBackground", "rgba(238, 86, 91, 0.1)");
  be.style.setProperty("--horizontalRule", "rgba(8, 8, 11, 0.15)");
  be.style.setProperty("--inputBackground", "rgba(0, 0, 0, 0.05)");
  be.style.setProperty("--tooltip", "lightgrey");
}
