
import { renderImage, moveEmblem } from "./index.js"

// source: hipsum.co
export function getRandText(form) {
    
    moveEmblem()

    $.ajax({
        type: "GET",
        url: "https://hipsum.co/api/?type=hipster-centric&sentences=1"
    }).then((data) => {
        
        let wordArr = data[0].split(" ")
        let randString = createThreeWordString(wordArr) 

        form.value = randString
        renderImage();
    })

}

function createThreeWordString(wordArr) {

    let returnString = [];

    for (let i = 0; i < 3; i++) {
        returnString.push(wordArr[(Math.floor(Math.random() * wordArr.length))])    
    }

    return returnString.join(" ")
}