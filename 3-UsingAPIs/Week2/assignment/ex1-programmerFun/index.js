'use strict';

const { result } = require("lodash");

function requestData(url) {
  return fetch(url)
  .then((result)=>{
    if(result === false){
      throw new Error("somthing went wrong")
    }
    return result.json();
  })
}

function renderImage(data) {
  const myImg = document.createElement("img");
  myImg.src = data.img;

  document.body.appendChild(myImg);
}

function renderError(error) {
  const myHeader = document.createElement("h1");
  const myHeaderText = document.createTextNode(`${error}`);

  myHeader.appendChild(myHeaderText);
  document.body.appendChild(myHeader);
}


async function main() {
  try{
    const response = await requestData('https://xkcd.now.sh/?comic=latest');
    renderImage(response);
  }catch(error){
    renderError(error);
  }
}

window.addEventListener('load', main);
