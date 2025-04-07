 //script.js
   document.addEventListener("DOMContentLoaded",() => {
    const products= [
	 {name: "Laptop", category:"Electronic",price:1500},
	 {name: "Smartphone", category:"Electronic",price:2000},
	 {name: "Shirt", category:"Clothes",price:800},
	 {name: "Shoes", category:"Footwear",price:1000},
	 {name: "Washing Machine", category:"Appliances",price:5000},
	 {name: "Headphones", category:"Electronic",price:1500},
	];
	
	const searchBox = document.getElementById("searchBox");
	const productContainer = document.getElementById("productContainer");
	
	//Render Product
	function displayProducts(productList){
	  productContainer.innerHTML = "";
	  productList.forEach((product) => {
	    const productCard = document.createElement("div");
		productCard.classList.add("product-card");
		productCard.innerHTML=`
		<h2>${product.name}</h2>
		<p>Category: ${product.category}</p>
		<p>Price: $${product.price}</p>
		`;
		   productContainer.appendChild(productCard);
	  });
	}
	
	// FIlter logic
	function filterProducts(searchText){
	  const filtered = products.filter((product) => 
	   product.name.toLowerCase().includes(searchText.toLowerCase())
	  );
	  
	  displayProducts(filtered);
	};
	
	//Initial display
	displayProducts(products);
	
	//Add search functionality
	
	searchBox.addEventListener("input",(event) => {
	  filterProducts(event.target.value);
	});
   });
  