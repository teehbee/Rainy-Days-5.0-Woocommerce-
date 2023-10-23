
import { getJackets } from "./api.js";

const jacketFrontPageContainer = document.querySelector(".frontpage-products");

    async function frontPageJackets() {
        try {
        const jacket = await getJackets();
        const fetchLoader = document.querySelector(".loader");
        fetchLoader.classList.remove("loader");    

    for (let i = 0; i < 4; i++) {
        console.log(jacket[i]);

        jacketFrontPageContainer.innerHTML += `
        <div class="frontpage-products-lower"><a href="jacket-specific.html?id=${jacket[i].slug}"><img src="${jacket[i].images[0].src}" alt="${jacket[i].title}"></a>
        <div class="frontpage-product-title-and-heart">
        <a href="jacket-specific.html?id=${jacket[i].slug}"><h4>${jacket[i].name}</h4></a>
        <i class="fa-regular fa-heart fa-lg"></i></div>
        <p>USD ${jacket[i].price_html}</p>
        </div>`
    } 
    }   catch(error) {
        jacketFrontPageContainer.innerHTML = "Something went wrong!";
    }
}

frontPageJackets();