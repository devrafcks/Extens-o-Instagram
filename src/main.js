// Baixando a imagem de perfil
function downloadImage(url, filename) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const urlCreator = window.URL || window.webkitURL;
      const imageUrl = urlCreator.createObjectURL(blob);
      const tag = document.createElement("a");
      tag.href = imageUrl;
      tag.download = filename;
      tag.click();
      urlCreator.revokeObjectURL(imageUrl);
    })
    .catch((err) => console.error("Erro ao baixar a imagem:", err));
}

// Adiciona evento ao botão
buttonDownloader.addEventListener("click", () => {
  console.log("⏳ Iniciando download...");
  const url = document.getElementsByClassName(
    "xpdipgo x972fbf xcfux6l x1qhh985 xm0m39n xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xl1xv1r xexx8yu x4uap5 x18d9i69 xkhd6sd x11njtxf xh8yej3"
  )[0].src;

  downloadImage(url, "imagem.png");
  console.log("✅ Download feito!");
});

// Função para injetar o botão
function injectButton() {
  const divcontainer = document.getElementsByClassName(
    "xc3tme8 x1xdureb x18wylqe x13vxnyz xvxrpd7"
  )[0];

  // Só adiciona se ainda não foi adicionado
  if (divcontainer && !divcontainer.contains(buttonDownloader)) {
    divcontainer.appendChild(buttonDownloader);
    console.log("✅ Botão adicionado!");
  }
}

const observer = new MutationObserver(() => {
  injectButton();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});


injectButton();
