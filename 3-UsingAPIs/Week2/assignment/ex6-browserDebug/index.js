/*
Full description at:https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-6-using-the-browser-debugger
*/

'use strict';

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

function createAndAppend(name, parent, options = {}) {
  const elem = document.createElement(name);
  parent.appendChild(elem);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'text') {
      elem.textContent = value;
    } else {
      elem.setAttribute(key, value);
    }
  });
  return elem;
}

function addTableRow(table, label, value) {
  const tr = createAndAppend('tr', table);
  createAndAppend('th', tr, { text: label });
  createAndAppend('td', tr, { text: value });
}

function renderLaureate(ul, { knownName, birth, death }) {
  const li = createAndAppend('li', ul);
  const table = createAndAppend('table', li);

  // Check if birth and death details exist before accessing their properties
  if (birth && birth.date && birth.place && birth.place.locationString) {
    addTableRow(table, 'Birth', `${birth.date}, ${birth.place.locationString}`);
  } else {
    addTableRow(table, 'Birth', 'Information not available');
  }

  if (death && death.date && death.place && death.place.locationString) {
    addTableRow(table, 'Death', `${death.date}, ${death.place.locationString}`);
  } else {
    addTableRow(table, 'Death', 'Information not available');
  }

  addTableRow(table, 'Name', knownName.en);
}

function renderLaureates(laureates) {
  const ul = createAndAppend('ul', document.body);
  laureates.forEach((laureate) => renderLaureate(ul, laureate));
}

async function fetchAndRender() {
  try {
    const laureatesData = await getData(
      'https://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );

    // Extract the 'laureates' array from the fetched data
    const laureates = laureatesData.laureates;

    renderLaureates(laureates);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

window.addEventListener('load', fetchAndRender);
