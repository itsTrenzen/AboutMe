let isSidebarOn = false;
let prevContent = null;

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
function appearContent(number) {
    if (number >= 0) {
        let contentBox;

        switch (number) {
            case 1:
                contentBox = document.querySelector(".content1");
                contentBox.style.opacity = "100";
                contentBox.style.zIndex = "1";
                if (prevContent != null){
                    prevContent.style.opacity = "0";
                    prevContent.style.zIndex = "0";
                }
                prevContent = contentBox;
                break;
            case 2: 
                contentBox = document.querySelector(".content2");
                contentBox.style.opacity = "100";
                contentBox.style.zIndex = "1";
                if (prevContent != null){
                    prevContent.style.opacity = "0";
                    prevContent.style.zIndex = "0";
                }
                prevContent = contentBox;
                break;
            case 3:
                contentBox = document.querySelector(".content3");
                contentBox.style.opacity = "100";
                contentBox.style.zIndex = "1";
                if (prevContent != null){
                    prevContent.style.opacity = "0";
                    prevContent.style.zIndex = "0";
                }
                prevContent = contentBox;
                break;
            case 4:
                contentBox = document.querySelector(".content4");
                contentBox.style.opacity = "100";
                contentBox.style.zIndex = "1";
                if (prevContent != null){
                    prevContent.style.opacity = "0";
                    prevContent.style.zIndex = "0";
                }
                prevContent = contentBox;
                break;
            case 5:
                contentBox = document.querySelector(".content5");
                contentBox.style.opacity = "100";
                contentBox.style.zIndex = "1";
                prevContent.style.opacity = "0";
                prevContent.style.zIndex = "0";
                prevContent = contentBox;
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
function sidebarSlide() {
    let sb = document.querySelector(".sidebar");
    if (isSidebarOn) {
        sb.style.left = "-100%";
        isSidebarOn = false;
    } else {
        sb.style.left = "0%";
        isSidebarOn = true;
    }
}
function backgroundfx(component) {
    let element = document.querySelector("." + component);
    element.style.backgroundColor = "black"
    setTimeout(() => {element.style.backgroundColor = "transparent"}, 200);
}