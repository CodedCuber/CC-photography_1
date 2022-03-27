const items = document.querySelector('.items');
const filterBtn = document.getElementById('filterBtn');
const clearBtn = document.getElementById('clearBtn');

//creating the initial divs and their objects

const beachObj = {name:'Beach', color:'Oak', size:'Medium', price:60, url:'images/beach.jpeg', hex:'#CE9F6F'};
const forestObj = {name:'Forest', color:'Dark Oak', size:'Medium', price:80, url:'images/forest.jpeg', hex:'#55342B'};
const macroObj = {name:'Macro', color:'White', size:'Small', price:50, url:'images/macro.jpeg', hex:'#FFFFFF'};
const astroObj = {name:'Astrophotography', color:'Black', size:'Large', price:120, url:'images/astro.jpeg', hex:'#000000'};
createDiv(beachObj);
createDiv(forestObj);
createDiv(macroObj);
createDiv(astroObj);

function createDiv(lib) {
    const existing = document.getElementById(lib.name);
    if (items.contains(existing)){
        existing.remove();
    }
    const square = document.createElement('div');
    square.className = 'shoppingItem';
    square.id = lib.name;
    square.textContent = lib.name;

    let img = document.createElement('img');
    img.src = lib.url;
    img.id = 'thumbnail';
    img.style.backgroundColor = lib.hex;
    square.appendChild(img);

    const properties = document.createElement('div');
    properties.id = 'properties';
    //color
    const colorProp = document.createElement('p');
    colorProp.textContent = `\nColor: ${lib.color}`;
    properties.appendChild(colorProp);
    //size
    const sizeProp = document.createElement('p');
    sizeProp.textContent = `\nSize: ${lib.size}`;
    properties.appendChild(sizeProp);

    //price
    const priceProp = document.createElement('p');
    priceProp.textContent = `\nPrice: $${lib.price}`;
    properties.appendChild(priceProp);

    square.appendChild(properties);
    items.appendChild(square);
}

//themes checkboxes
let themeCheckAll = document.querySelector('input[name=allTheme]');
const beach = document.getElementById('beach');
const forest = document.getElementById('forest');
const macro = document.getElementById('macro');
const astrophotography = document.getElementById('astrophotography');
//colors checkboxes
let colorCheckAll = document.querySelector('input[name=allColor]');
const black = document.getElementById('black');
const white = document.getElementById('white');
const oak = document.getElementById('oak');
const darkOak = document.getElementById('darkOak');

//check/uncheck all color/theme boxes when check all box changed
themeCheckAll.addEventListener('change', () => {
    if (themeCheckAll.checked) {
        beach.checked = true;
        forest.checked = true;
        macro.checked = true;
        astrophotography.checked = true;
    }
    else {
        beach.checked = false;
        forest.checked = false;
        macro.checked = false;
        astrophotography.checked = false;
    }
})
colorCheckAll.addEventListener('change', () => {
    if (colorCheckAll.checked) {
        black.checked = true;
        white.checked = true;
        oak.checked = true;
        darkOak.checked = true;
    }
    else {
        black.checked = false;
        white.checked = false;
        oak.checked = false;
        darkOak.checked = false;
    }
})

filterBtn.addEventListener('click', checkFilters);

clearBtn.addEventListener('click', () => {
    items.innerHTML = "";
})

//size radio button
const anyRadio = document.getElementById('any');
const smallRadio = document.getElementById('small');
const mediumRadio = document.getElementById('medium');
const largeRadio = document.getElementById('large');


//function for checking parameters/filters
function checkFilters() {
    const minEl = document.getElementById('min');
    const maxEl = document.getElementById('max');
    let min = parseInt(minEl.value);
    let max = parseInt(maxEl.value);

    items.innerHTML = "";
    if(beachObj.price >= min && beachObj.price <= max) {
        if(beach.checked && oak.checked && (mediumRadio.checked || anyRadio.checked)){createDiv(beachObj);}
    }
    if(forestObj.price >= min && forestObj.price <= max) {
        if(forest.checked && darkOak.checked && (mediumRadio.checked || anyRadio.checked)){createDiv(forestObj);}
    }
    if(macroObj.price >= min && macroObj.price <= max) {
        if(macro.checked && white.checked && (smallRadio.checked || anyRadio.checked)){createDiv(macroObj);}
    }
    if(astroObj.price >= min && astroObj.price <= max) {
        if(astrophotography.checked && black.checked && (largeRadio.checked || anyRadio.checked)){createDiv(astroObj);}
    }
    
}