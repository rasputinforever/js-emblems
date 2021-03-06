import { createImg } from "./emblemGenerator.js"
import { getRandText } from "./randomText.js"



const renderLoc = document.getElementById("characterEmblemRender")
const emblemText = document.getElementById("emblemTextForm")
const submitButton = document.getElementById("generateBtn")
const oldEmblems = document.getElementById("oldEmblems")

oldEmblems


submitButton.onclick = function() {
    moveEmblem()
    // clear render area
    renderLoc.innerHTML = '';
    
    // generate sub-area
    renderLoc.innerHTML = `
        <div class="generatedEmblem">

        <p>${emblemText.value}</p>
        </div>
    `

    // get id of new render area
    const emblemLoc = renderLoc.getElementsByClassName("generatedEmblem")
    // generate
    createImg(emblemLoc[0], emblemText.value);
 }

function moveEmblem() {
    if (renderLoc.innerHTML != '') {
        oldEmblems.innerHTML += renderLoc.innerHTML
    }
}

console.log(getRandText())