const flowers = [
  { name: "Aralia", pic: "/assets/1.jpg", price1: "Rs 250", price2: "" },
  {
    name: "Table Kamini",
    pic: "/assets/2.jpg",
    price1: "Small: Rs 250",
    price2: "Big: Rs 450",
  },
  {
    name: "",
    pic: "",
    price1: "",
    price2: "",
  },
];

// Get the container where flowers will be displayed
const flowerContainer = document.getElementById("flower-container");

// Generate HTML for each flower and append it to the container
flowers.forEach((flower) => {
  if (flower.name === "") {
    return; // Skip iteration if name is empty
  }

  const flowerDiv = document.createElement("div");
  flowerDiv.classList.add("flower-item"); // optional styling class

  // Add flower details to the div
  flowerDiv.innerHTML = `
        <img src='${flower.pic}'></img>
        <p><strong>Name:</strong> ${flower.name}</p>
        <p> ${flower.price1}</p>
    `;
  if (flower.price2 != "") {
    flowerDiv.innerHTML += `<p>${flower.price2}</p>`;
  }

  flowerContainer.appendChild(flowerDiv);
});
