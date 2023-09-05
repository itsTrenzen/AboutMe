buildCon();
function redirect(lang) {
    if (lang === "de") window.open("./IndexDE.html");
    if (lang === "en") window.open("./IndexEN.html");
}
function playSnake() {
    window.open("/Snake-game/snake.html");
}
function playTic() {
    window.open("/TicTacToe/TicTacToe.html");
}

function buildCon() {
    let c1 = document.getElementsByClassName("circle1");
    let c2 = document.getElementsByClassName("circle2");
    let c3 = document.getElementsByClassName("circle3");
    let c4 = document.getElementsByClassName("circle4");

    let rect1 = c1.getBoundingClientRect();

    let parent = document.getElementsByClassName("journeySection");
    let bridge = document.createElement("div");
    bridge.style.width = "500";
    bridge.style.height = "5";
    bridge.style.backgroundColor = "black"
    
    parent.appendChild(bridge);
}
function appearContent(number) {
    if (number >= 0) {
        let contentBox;

        switch (number) {
            case 1:
                contentBox = document.querySelector(".content1");
                contentBox.style.opacity = "100";
                break;
            case 2: 
                contentBox = document.querySelector(".content2");
                contentBox.style.opacity = "100";
                break;
            case 3:
                contentBox = document.querySelector(".content3");
                contentBox.style.opacity = "100";
                break;
            case 4:
                contentBox = document.querySelector(".content4");
                contentBox.style.opacity = "100";
                break;
            case 5:
                contentBox = document.querySelector(".content5");
                contentBox.style.opacity = "100";
                break;
            default:
                break;
        }
    }
}

function disappearContent(number) {
    if (number >= 0) {
        let contentBox;

        switch (number) {
            case 1:
                contentBox = document.querySelector(".content1");
                contentBox.style.opacity = "0";
                break;
            case 2: 
                contentBox = document.querySelector(".content2");
                contentBox.style.opacity = "0";
                break;
            case 3:
                contentBox = document.querySelector(".content3");
                contentBox.style.opacity = "0";
                break;
            case 4:
                contentBox = document.querySelector(".content4");
                contentBox.style.opacity = "0";
                break;
            case 5:
                contentBox = document.querySelector(".content5");
                contentBox.style.opacity = "0";
                break;
            default:
                break;
        }
    }
}