document.addEventListener("DOMContentLoaded", (event) => {
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Set the copyright year in the first paragraph of the footer
  document.getElementById("currentyear").textContent = ` ${currentYear}`;

  // Get the last modified date of the document
  //   const lastModified = document.lastModified;
  //   // Set the last modified date in the second paragraph of the footer
  //   document.getElementById(
  //     "lastModified"
  //   ).textContent = `Last Modified: ${lastModified}`;
});
const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = document.lastModified;
