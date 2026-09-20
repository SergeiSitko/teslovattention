(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function label(theme) {
    return theme === "dark" ? "Светлая тема" : "Тёмная тема";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    btn.textContent = label(theme);
    btn.setAttribute(
      "aria-label",
      theme === "dark" ? "Включить светлую тему" : "Включить тёмную тему"
    );
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }

  apply(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  btn.addEventListener("click", function () {
    apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
})();
