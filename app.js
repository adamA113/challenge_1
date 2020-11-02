for (let i = 1; i <= 9; i++) {
    var img = document.createElement("img");
    img.setAttribute("Src", "https://www.flaticon.com/svg/static/icons/svg/566/566294.svg");
    img.setAttribute("width", "90");
    img.setAttribute("height", "90");
    img.setAttribute("id", `img${i}`);
    // console.log(img)
    img.addEventListener("click", renderImg)
    document.getElementById(`#${i}`).appendChild(img);
}

var count = 0;
function renderImg(event) {
    
    var select = ["https://www.flaticon.com/premium-icon/icons/svg/2997/2997911.svg", "https://www.flaticon.com/svg/static/icons/svg/16/16894.svg"]
    
    count++;
    console.log(count)

    if (count % 2){
        event.target.setAttribute("src", select[0]);
        event.target.removeEventListener("click", renderImg);
    }

    else{
        event.target.setAttribute("src", select[1]);
        event.target.removeEventListener("click", renderImg);

    }
    // var currentImg = event.target.currentSrc;
    // currentImg = "https://www.flaticon.com/premium-icon/icons/svg/2997/2997911.svg";
    // console.log(img)
    
}


function StartGame() {

}

// var newGame = renderImg();

