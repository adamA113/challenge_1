function CreateGrid(n){
    for (let i = 1; i <= n; i++) {
        var img = document.createElement("img");
        img.setAttribute("Src", "https://www.flaticon.com/svg/static/icons/svg/566/566294.svg");
        img.setAttribute("width", "90");
        img.setAttribute("height", "90");
        img.setAttribute("id", `img${i}`);
        // console.log(img)
        img.addEventListener("click", newGame)
        document.getElementById(`#${i}`).appendChild(img);
    }
}
CreateGrid(9)

function win(selectionArray) {
    var winCases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winCases.length - 1; i++) {
        var winCase = winCases[i];
        if (selectionArray[winCase[0]] === selectionArray[winCase[1]] === selectionArray[winCase[2]]) {
            console.log("winnnnnnnnnn")
            return;
        }
    }
}


var StartGame = function (win) {
    var count = 0;
    var playersSelection = [0, 0, 0,
                            0, 0, 0,
                            0, 0, 0];
    return function (event) {
        console.log(event)
        var select = ["https://www.flaticon.com/premium-icon/icons/svg/2997/2997911.svg", "https://www.flaticon.com/svg/static/icons/svg/16/16894.svg"]
        
        count++;
        // console.log(count)

        if (count % 2){ /// player 1, X
            var imgId = parseInt(event.target.getAttribute("id").slice(3), 10);
            playersSelection[imgId - 1] = 1; 

            event.target.setAttribute("src", select[0]);
            event.target.removeEventListener("click", renderImg);
            win(playersSelection);
        }

        else{ /// player 2, O
            var imgId = parseInt(event.target.getAttribute("id").slice(3), 10);
            playersSelection[imgId - 1] = 2; 

            event.target.setAttribute("src", select[1]);
            event.target.removeEventListener("click", renderImg);
            win(playersSelection)

        }
        // var currentImg = event.target.currentSrc;
        
    }

}

var newGame = StartGame()

newGame()

