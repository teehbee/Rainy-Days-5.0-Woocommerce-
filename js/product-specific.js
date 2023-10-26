import { getJacket } from "./api.js";

const jacketWomenContainerSpecific = document.querySelector(".product-main");

  async function womenPageJacket() {
    try {
      const jacketForWoman = await getJacket();
      const fetchLoader = document.querySelector(".loader");
      fetchLoader.classList.remove("loader");

      jacketWomenContainerSpecific.innerHTML += `<div class="jacket-specific-title-and-heart">
      <h1>${jacketForWoman.name}</h1>
      <i class="fa-regular fa-heart fa-lg"></i>
    </div>
    <div class="jacket-color-price">
    <p class="jacket-specific-color">${jacketForWoman.attributes[0].terms[0].name}</p>
    <p class="jacket-specific-price">${jacketForWoman.price_html}</p>
    </div>
    <div class="jacket-specific-picture">
      <img src="${jacketForWoman.images[0].src}" alt="${jacketForWoman.description}">
    </div>
        <div class="size-selector">
          <label for="size-selector">Select size</label>
          <select name="size-selector" id="size-selector">
            <option value="XS">${jacketForWoman.attributes[1].terms[0].name}</option>
            <option value="S">${jacketForWoman.attributes[1].terms[1].name}</option>
            <option value="M">${jacketForWoman.attributes[1].terms[2].name}</option>
            <option value="L">${jacketForWoman.attributes[1].terms[3].name}</option>
            <option value="XL">${jacketForWoman.attributes[1].terms[4].name}</option>
          </select>
          <a href="missing-page.html">Size guide</a>
        </div>
      <div class="purchase-button">
        <a href="#" class="cta-green">ADD TO CART</a> 
      </div>
      <div class="jacket-specific-h2">
        <h2>About the product</h2>
        <p class="product-info">${jacketForWoman.description}</p>
      </div>      
    </div>`;

    }catch(error) {
      jacketWomenContainerSpecific.innerHTML = `<p>Something went wrong here as well!</p>`;
  } 

  }

  womenPageJacket();
