// Every screenshot opens full size; Esc, a click or Close puts it away, and focus goes back where it was.
(function () {
  var viewer = document.querySelector(".viewer"), big = viewer.querySelector("img"), closeBtn = viewer.querySelector(".close-v"), opener = null;
  function open(btn) {
    opener = btn; var img = btn.querySelector("img");
    big.src = btn.getAttribute("data-full"); big.alt = img ? img.alt : "";
    viewer.hidden = false; document.body.style.overflow = "hidden"; closeBtn.focus();
  }
  function close() {
    if (viewer.hidden) return;
    viewer.hidden = true; document.body.style.overflow = ""; big.removeAttribute("src");
    if (opener) opener.focus();
  }
  document.querySelectorAll(".shot[data-full]").forEach(function (b) { b.addEventListener("click", function () { open(b); }); });
  viewer.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
})();
