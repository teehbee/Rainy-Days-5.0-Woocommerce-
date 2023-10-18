//API call for all jackets

const url = "https://api.noroff.dev/api/v1/rainy-days/";


async function getJackets() {

  const response = await fetch(url);

  const jacket = await response.json();

  return jacket;
  }   

export { getJackets };

//API call for specific jacket

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

async function getJacket() {
  
  const response = await fetch(url + id);

  const jacketDetails = await response.json();

  return jacketDetails;
  }

  export { getJacket };