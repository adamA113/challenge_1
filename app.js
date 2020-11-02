for (let i = 1; i <= 9; i++){

    var img = document.createElement("img");
    img.setAttribute("Src","https://www.flaticon.com/svg/static/icons/svg/566/566294.svg");
    img.setAttribute("width", "90");
    img.setAttribute("height", "90");
    img.setAttribute("id", `img${i}`);
    // console.log(img)
    img.addEventListener("click", renderImg)
    document.getElementById(`#${i}`).appendChild(img); 
}

function renderImg(event){
    console.log(event)

}

function StartGame(){
    
   

}

