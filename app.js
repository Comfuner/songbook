
let songA = document.querySelector(".song#song-a > p");
function unfoldSong(elem) {
    let tempStr = "";
    console.log(elem.childNodes);
    Array.from(elem.childNodes).map(node => {
        if (node === "text") {

        }
        if (node === "br") {
            tempStr += "<br>"
        }
    })
    // let tempStrArr = elem.innerText.split(" ");
    // tempStrArr.map(word => {
    //     tempStr += `<span>${word}&nbsp</span>`
    // });
    // elem.innerHTML = tempStr;
}


unfoldSong(songA);