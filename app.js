for (let i = 1; i <= 9; i++){

    var img = document.createElement("img");
    img.setAttribute("Src","https://www.flaticon.com/svg/static/icons/svg/566/566294.svg");
    img.setAttribute("width", "90");
    img.setAttribute("height", "90");
    // console.log(`#${i}`)
    var x = `#${i}`;
    console.log(document.getElementById(x))
    document.getElementById(`#${i}`).appendChild(img);
}


function StartGame(){


}

