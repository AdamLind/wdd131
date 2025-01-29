const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const title = document.querySelector('.title')
const header = document.querySelector('.normal-head')
const navwrap = document.querySelector('.list-wrapper')
const cardContainer = document.getElementById("card-container");
const homeLink = document.getElementById("no-filter")
const oldTempleLink = document.getElementById("old-temples")
const newTempleLink = document.getElementById("new-temples")
const largeTempleLink = document.getElementById("large-temples")
const smallTempleLink = document.getElementById("small-temples")
const subtitle = document.getElementById("subtitle")


const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Draper Utah",
		location: "Draper, Utah",
		dedicated: "2009, March, 20",
		area: 58300,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/draper-utah/400x250/draper-utah-temple-lds-602231-wallpaper.jpg"
	  },
	  {
		templeName: "Campinas Brazil",
		location: "Campinas, Brazil",
		dedicated: "2002, May, 17",
		area: 48100,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/mormon-temple-campinas-brazil-1029890-wallpaper.jpg"
	  },
	  {
		templeName: "Bern Switzerland",
		location: "Zollikofen Switzerland",
		dedicated: "1955, September, 11",
		area: 35546,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784290-wallpaper.jpg"
	  },
	// Add more temple objects here...
  ];


homeLink.addEventListener("click", () => {
	subtitle.textContent = "Home"
	createTempleCards(temples);
	event.preventDefault()
})

oldTempleLink.addEventListener("click", () => {
	subtitle.textContent = "Old Temples"
	let filteredTemples = temples.filter(temple => temple.dedicated.substring(0, 4) < 2000)
	createTempleCards(filteredTemples)
	event.preventDefault()
}) 

newTempleLink.addEventListener("click", () => {
	subtitle.textContent = "New Temples"
	let filteredTemples = temples.filter(temple => temple.dedicated.substring(0, 4) >= 2000)
	createTempleCards(filteredTemples)
	event.preventDefault()
})

largeTempleLink.addEventListener("click", () => {
	subtitle.textContent = "Large Temples"
	let filteredTemples = temples.filter(temple => temple.area > 90000)
	createTempleCards(filteredTemples)
	event.preventDefault()
})

smallTempleLink.addEventListener("click", () => {
	subtitle.textContent = "Small Temples"
	let filteredTemples = temples.filter(temple => temple.area < 10000)
	createTempleCards(filteredTemples)
	event.preventDefault()
})

function createTempleCards(filteredTemples) { 
	cardContainer.innerHTML = ''; // Clears all child nodes
	filteredTemples.map(temple => {
		const card = document.createElement("div");
		card.classList.add("card")
		card.innerHTML =
			`
			<h3>${temple.templeName}</h3>
			<p><span class="info-title">Location</span>: ${temple.location}</p>
			<p><span class="info-title">Dedicated</span>: ${temple.dedicated}</p>
			<p><span class="info-title">Size</span>: ${temple.area} sq ft</p>
			<img src="${temple.imageUrl}" loading="lazy" alt="${temple.templeName} Temple">
			`
		
		cardContainer.appendChild(card)
})};

createTempleCards(temples);


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	title.classList.toggle('disappear');
	header.classList.toggle('head-rearrange');
	navwrap.classList.toggle('show');
});