function showHome() {
  document.getElementById("gallery").style.display = "none";
  document.getElementById("home").style.display = "block";
}

function showGallery() {
  document.getElementById("home").style.display = "none";
  document.getElementById("gallery").style.display = "block";
}

// ギャラリーでクリックされた画像を画面いっぱい表示
function showImage(itemElement) {
  const imgEl = itemElement.querySelector('.gallery-image');
  const title = itemElement.querySelector('.gallery-title').textContent;
  const desc = itemElement.querySelector('.gallery-desc').textContent;

  const preview = document.getElementById("preview");
  const previewImage = document.getElementById("preview-image");
  const previewInfo = document.getElementById("preview-info");

  previewImage.src = imgEl.src;
  previewInfo.innerHTML = `<strong>${title}</strong><br>${desc}`;
  preview.style.display = "flex";
}

function closePreview() {
  const preview = document.getElementById("preview");
  preview.style.display = "none";
}

function inquire() {
  alert("この画像について問い合わせます！");
}
