const main = document.querySelector(".main")
function creatCirle(){
    let circle = document.createElement("div")
    circle.className = "circle"
    main.appendChild(circle)


}

setInterval(function(){
    creatCirle()
} ,2000)