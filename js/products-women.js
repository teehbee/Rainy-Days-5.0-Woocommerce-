import { getJackets } from "../js/api.js";

const jacketWomenContainer = document.querySelector(".jackets-for-sale");

  async function womanPageJackets() {
    try {
      const jacketForWomen = await getJackets();
      const fetchLoader = document.querySelector(".loader");
      fetchLoader.classList.remove("loader");


      for (let i = 0; i < 6; i++) {
        console.log(jacketForWomen[i]);

        jacketWomenContainer.innerHTML += `
        <div class="jacket-tile"><a href="../jacket-specific.html?id=${jacketForWomen[i].slug}"><img src="${jacketForWomen[i].images[0].src}" alt="${jacketForWomen[i].description}"></a>
        <div class="frontpage-product-title-and-heart">
        <a href="../jacket-specific.html?id=${jacketForWomen[i].slug}"><h3>${jacketForWomen[i].name}</h3></a>
          <i class="fa-regular fa-heart fa-lg"></i>
        </div>
        <p>NOK ${jacketForWomen[i].price_html}</p>
      </div>`
    }
    } catch(error) {
      jacketWomenContainer.innerHTML = `<p>Something went wrong!</p>`;
    }
  }

  womanPageJackets();
