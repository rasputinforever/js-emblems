// modules
import { createImg } from "./emblemGenerator.js"
import { getRandText } from "./randomText.js"

// elements
const renderLoc = document.getElementById("characterEmblemRender")
const emblemText = document.getElementById("emblemTextForm")
const submitButton = document.getElementById("generateBtn")
const randTextButton = document.getElementById("randomBtn")
const oldEmblems = document.getElementById("oldEmblems")
const colorInput = document.getElementById("colorInput")

// generate icon when clicked
submitButton.onclick = function() {
    moveEmblem()
    // clear render area
    renderLoc.innerHTML = '';
    
    // generate wrapper
    renderLoc.innerHTML = 
    `
        <div class="generatedEmblem col-sm">
            <p>${emblemText.value}</p>    
        </div>
    `

    // get element of new render area
    const emblemLoc = renderLoc.getElementsByClassName("generatedEmblem")

    //back color
    let backColor = colorInput.value
    console.log(backColor === "")
    if (!backColor) {
        backColor = "Black"
    }

    // generate
    createImg(emblemLoc[0], emblemText.value, backColor);

    // clear for next
    emblemText.value = ''
 }

function moveEmblem() {
    if (renderLoc.innerHTML != '') {
        oldEmblems.innerHTML += renderLoc.innerHTML
    }
}

// generate random text
randTextButton.onclick = function() {
    getRandText(emblemText)
}