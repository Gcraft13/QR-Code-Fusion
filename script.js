const apiURL = "http(s)://api.qrserver.com/v1/create-qr-code/?size=10x10&data=";
const qrImage = document.getElementById("qrImage");
const imgBox = document.getElementById("imgBox");
const qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = apiURL + qrText.value;

    qrImage.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    });
  }
}
