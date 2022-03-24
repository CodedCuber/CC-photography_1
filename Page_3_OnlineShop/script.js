const items = document.querySelector('.items');
const filterBtn = document.getElementById('filterBtn');
const clearBtn = document.getElementById('clearBtn');

createDiv('Beach');
createDiv('Forest');
createDiv('Macro');
createDiv('Astrophotography');

function createDiv(word) {
    const existing = document.getElementById(word);
    if (items.contains(existing)){
        existing.remove();
    }
    const square = document.createElement('div');
    square.className = 'shoppingItem';
    square.id = word;
    square.textContent = word;
    items.appendChild(square);
}

function checkTheme(box, keyword, color) {
    const matchingDiv = document.getElementById(keyword);
    if (box.checked){
        if (color.checked){
            createDiv(keyword);
        }
        else {
            if (items.contains(matchingDiv)){
                matchingDiv.remove();
            }
        }
    } else if (color.checked) {
        if (box.checked){
            createDiv(keyword);
        }
        else {
            if (items.contains(matchingDiv)){
                matchingDiv.remove();
            }
        }
        
    } else {
        if (items.contains(matchingDiv)){
            matchingDiv.remove();
        }
    }
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

filterBtn.addEventListener('click', () => {


    checkTheme(beach, 'Beach', oak);
    checkTheme(forest, 'Forest', darkOak);
    checkTheme(macro, 'Macro', white);
    checkTheme(astrophotography, 'Astrophotography', black);


});

clearBtn.addEventListener('click', () => {
    items.innerHTML = "";
})