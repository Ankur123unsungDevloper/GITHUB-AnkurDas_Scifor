function toggleText() {
  const text = document.getElementById("myText");
  const button = document.querySelector("button");

  text.classList.toggle("show");
  button.textContent = text.classList.contains("show") ? "Hide Text" : "Show Text";
}