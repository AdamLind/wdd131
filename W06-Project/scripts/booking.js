const selecter = document.querySelector('#select');
const products = [
    {
      id: "fc-1888",
      name: "Brials",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Wedding",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Engagements",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Reception",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Other...",
      averagerating: 5.0
    }
  ];

function createSelectOptions(products) { 
	products.map(product => {
		const option = document.createElement("option");
        option.value = product.id
		option.innerHTML = product.name
		selecter.appendChild(option)
})};

createSelectOptions(products)