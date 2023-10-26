//API call for all jackets

const url = "https://cms-ca.thbergseng.com//wp-json/wc/store/products/";


async function getJackets() {

  const response = await fetch(url);

  const jacket = await response.json();

  return jacket;
  }   

export { getJackets };

//API call for specific jacket

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get ("id");

async function getJacket() {
  
  const response = await fetch(url + id);

  const jacketDetails = await response.json();

  return jacketDetails;
  }

  export { getJacket };