const buttonDownloader = document.createElement("button");
buttonDownloader.innerText = "Download da imagem";
buttonDownloader.setAttribute("type", "button");

// Estilo base
buttonDownloader.style.background = "linear-gradient(135deg, #f70ac5, #f21864)";
buttonDownloader.style.color = "#fff";
buttonDownloader.style.border = "none";
buttonDownloader.style.borderRadius = "8px";
buttonDownloader.style.padding = "10px 18px";
buttonDownloader.style.fontSize = "14px";
buttonDownloader.style.fontWeight = "600";
buttonDownloader.style.cursor = "pointer";
buttonDownloader.style.marginTop = "5px";
buttonDownloader.style.marginBottom = "10px";
buttonDownloader.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.15)";
buttonDownloader.style.transition = "transform 0.2s, filter 0.3s";

// Hover e clique
buttonDownloader.addEventListener("mouseover", () => {
  buttonDownloader.style.filter = "brightness(1.1)";
});
buttonDownloader.addEventListener("mouseout", () => {
  buttonDownloader.style.filter = "brightness(1)";
});
buttonDownloader.addEventListener("mousedown", () => {
  buttonDownloader.style.transform = "scale(0.97)";
});
buttonDownloader.addEventListener("mouseup", () => {
  buttonDownloader.style.transform = "scale(1)";
});
