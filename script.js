const apiURL = "http(s)://api.qrserver.com/v1/create-qr-code/?size=10x10";

const urlText = document.getElementById("URL").value;

function makeQR() {
  fetch(apiURL + "&" + urlText)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Assuming the response is in JSON format
    })
    .then((data) => {
      // Do something with the data
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
