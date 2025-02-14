const cardContainer = document.getElementById("card-container");

const flowers = [
	{
	  flowerName: "Spring Bouquet",
	  season: "Spring",
	  size: "Large",
	  imageUrl:
	  "https://www.cascadefloralwholesale.com/wp-content/uploads/2024/02/shutterstock_1928595698-300x200.jpg"
	},
	{
	  flowerName: "Winter Bouquet",
	  season: "Winter",
	  size: "Medium",
	  imageUrl:
	  "https://www.cascadefloralwholesale.com/wp-content/uploads/2022/12/Winter-flowers-to-add-to-red-arrangements-300x200.jpg"
	},
	{
	  flowerName: "Marsala Blush",
	  season: "Summer",
	  size: "Medium",
	  imageUrl:
	  "https://www.solaflowerstore.com/cdn/shop/products/Marsala_Blush_Pink_Sola_Bouquet_4_300x300.png?v=1626334648"
	},
	{
	  flowerName: "Peach Roses",
	  season: "Fall",
	  size: "Medium",
	  imageUrl:
	  "https://www.cascadefloralwholesale.com/wp-content/uploads/2023/12/shutterstock_1006615501-300x200.jpg"
	},
	{
	  flowerName: "Burgundy Dusty Rose",
	  season: "Winter",
	  size: "Small",
	  imageUrl:
	  "https://www.solaflowerstore.com/cdn/shop/products/Marsala_burgundy_dusty_rose_sola_bouquet_300x300.jpg?v=1518546220"
	},
	{
	  flowerName: "Vibrant Variety",
	  season: "Summer",
	  size: "Small",
	  imageUrl:
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGsZrqAzmVIMNu9SMjtMxK9OdZcnJkUpnKg&s"
	},
	{
	  flowerName: "Dahlia Bouquet",
	  season: "Summer",
	  size: "Medium",
	  imageUrl:
	  "https://images.squarespace-cdn.com/content/v1/59e92c802aeba584ee44451f/1540839967947-IXJXIM3PLU5WYO6SX4RW/reduced_ss_dahlia_bouquet_csa_flower_farm-_basil.jpg?format=300w"
	},
	{
		flowerName: "Mason Jar Bouquets",
		season: "Spring",
		size: "Small",
		imageUrl:
		"https://goodfruitfarm.com/cdn/shop/files/flowers-in-mason-jars_430x_596809be-21a9-4b40-b8b5-2dfc51254b4d_300x300.webp?v=1713704642"
	  },
	  {
		flowerName: "Custom Bouquet",
		season: "Any",
		size: "Any",
		imageUrl:
		"https://growingformarket.com/custom/Bouquet1.jpg"
	  },
	  {
		flowerName: "Wedding Bouquet",
		season: "Any",
		size: "Large",
		imageUrl:
		"https://images.squarespace-cdn.com/content/v1/50ed78abe4b0a16d22fbfbca/1611168801547-FA6IZUHCQ5RL12TTMB14/That_Time_Events_Bouquet.jpg?format=300w"
	  },
	// Add more temple objects here...
  ];
  
function createFlowerCards(flowers) { 
	cardContainer.innerHTML = ''; // Clears all child nodes
	flowers.map(flower => {
		const card = document.createElement("div");
		card.classList.add("card")
		card.innerHTML =
			`
			<img src="${flower.imageUrl}" loading="lazy" alt="${flower.flowerName} Temple">
			<h2>${flower.flowerName}</h2>
			<p><span class="info-title">Season</span>: ${flower.season}</p>
			<p><span class="info-title">Size</span>: ${flower.size}</p>
			`
		
		cardContainer.appendChild(card)
})};

createFlowerCards(flowers);