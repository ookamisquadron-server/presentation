// ホーム画面を表示する
function showHome() {
  document.getElementById("gallery").style.display = "none";
  document.getElementById("home").style.display = "block";
}

// ギャラリーを表示する
function showGallery() {
  document.getElementById("home").style.display = "none";
  document.getElementById("gallery").style.display = "block";
}

// 画像を拡大表示する
function showImage(imageElement) {
  const preview = document.getElementById("preview");
  const previewImage = document.getElementById("preview-image");
  previewImage.src = imageElement.src;
  preview.style.display = "flex";
}

// 拡大表示を閉じる
function closePreview() {
  const preview = document.getElementById("preview");
  preview.style.display = "none";
}

// 問い合わせるボタンの動作
function inquire() {
  alert("linkから問い合わせができます");
}
