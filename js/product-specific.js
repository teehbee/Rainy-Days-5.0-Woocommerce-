import { getJacket } from "./api.js";

const jacketWomenContainerSpecific = document.querySelector(".product-main");

  async function womenPageJacket() {
    try {
      const jacketForWoman = await getJacket();
      const fetchLoader = document.querySelector(".loader");
      fetchLoader.classList.remove("loader");

      jacketWomenContainerSpecific.innerHTML += `<div class="jacket-specific-title-and-heart">
      <h1>${jacketForWoman.title}</h1>
      <i class="fa-regular fa-heart fa-lg"></i>
    </div>
    <div class="jacket-color-price">
    <p class="jacket-specific-color">${jacketForWoman.baseColor}</p>
    <p class="jacket-specific-price">USD ${jacketForWoman.price}</p>
    </div>
    <div class="jacket-specific-picture">
      <img src="${jacketForWoman.image}" alt="${jacketForWoman.description}">
    </div>
        <div class="size-selector">
          <label for="size-selector">Select size</label>
          <select name="size-selector" id="size-selector">
            <option value="XS">${jacketForWoman.sizes[0]}</option>
            <option value="S">${jacketForWoman.sizes[1]}</option>
            <option value="M">${jacketForWoman.sizes[2]}</option>
            <option value="L">${jacketForWoman.sizes[3]}</option>
            <option value="XL">${jacketForWoman.sizes[4]}</option>
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
