
import { getJackets } from "./api.js";

const jacketFrontPageContainer = document.querySelector(".frontpage-products");

    async function frontPageJackets() {
        try {
        const jacket = await getJackets();
        const fetchLoader = document.querySelector(".loader");
        fetchLoader.classList.remove("loader");
    

    for (let i = 0; i < 4; i++) {

        jacketFrontPageContainer.innerHTML += `
        <div class="frontpage-products-lower"><a href="jacket-specific.html?id=${jacket[i].id}"><img src="${jacket[i].image}" alt="${jacket[i].title}"></a>
        <div class="frontpage-product-title-and-heart">
        <a href="jacket-specific.html?id=${jacket[i].id}"><h4>${jacket[i].title}</h4></a>
        <i class="fa-regular fa-heart fa-lg"></i></div>
        <p>USD ${jacket[i].price}</p>
        </div>`
    } 
    }   catch(error) {
        jacketFrontPageContainer.innerHTML = "Something went wrong!";
    }
}

frontPageJackets();