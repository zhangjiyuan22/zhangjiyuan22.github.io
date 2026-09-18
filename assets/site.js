(function () {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const saved = localStorage.getItem("theme");
  const preferredDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (saved === "dark" || (!saved && preferredDark)) {
    root.dataset.theme = "dark";
  }

  function updateButton() {
    if (!toggle) return;
    const dark = root.dataset.theme === "dark";
    toggle.textContent = dark ? "☀" : "☾";
    toggle.setAttribute("aria-label", dark ? "Use light theme" : "Use dark theme");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      const dark = root.dataset.theme === "dark";
      if (dark) {
        delete root.dataset.theme;
        localStorage.setItem("theme", "light");
      } else {
        root.dataset.theme = "dark";
        localStorage.setItem("theme", "dark");
      }
      updateButton();
    });
  }

  updateButton();
})();
