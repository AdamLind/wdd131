const footerYear = document.getElementById("currentyear");
const footerEditedTime = document.getElementById("lastModified");
const today = new Date();
const modifiedDate = new Date(document.lastModified);

footerYear.innerHTML = `${today.getFullYear()}`;
footerEditedTime.innerHTML = `Last edit: ${modifiedDate}`;