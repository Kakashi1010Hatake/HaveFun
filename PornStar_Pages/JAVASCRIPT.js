// Audio
const audio = new Audio();
audio.src = "../SFX/111.mp3";
audio.play();
// ------------------------------------------------------------------------------
// SideBar
document.querySelector('.light').style.background = "rgb(248, 152, 30)";
document.querySelector('.light').style.filter = "drop-shadow(5px 5px 5px black)";

let playing = document.querySelector(".playMe");
let sideBar = document.querySelector(".sidebar");
let close = document.querySelector(".close_btn");

function OpenMenu() {
    close.style.opacity = 1;
    sideBar.style.left = 0;
    playing.style.display = "none";
}
function CloseMenu() {
    close.style.opacity = 0;
    sideBar.style.left = "-75%";
    playing.style.display = "block";
}
// ------------------------------------------------------------------------------
// Up Button
let btn = document.querySelector(".btn");
window.onscroll = function () {
    if (window.scrollY >= 600){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
}
btn.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
}
// ------------------------------------------------------------------------------
// Creative
let clicky01 = document.querySelector(".clicky01");
const audio01 = new Audio();
audio01.src = "../SFX/kiss.mp3";
clicky01.onclick = function() {
    audio01.play();
}
let clicky02 = document.querySelector(".clicky02");
const audio02 = new Audio();
audio02.src = "../SFX/moan-female.mp3";
clicky02.onclick = function() {
    audio02.play();
}
let clicky03 = document.querySelector(".clicky03");
const audio03 = new Audio();
audio03.src = "../SFX/orgasm2.mp3";
clicky03.onclick = function() {
    audio03.play();
}

document.querySelector(".closyyy").onclick = function () {
    document.querySelector(".playWithMe").style.display = "none";
}
function PlayWithMe () {
    document.querySelector(".playWithMe").style.display = "flex";
}
// ------------------------------------------------------------------------------

document.querySelector(".c_tab").addEventListener('click', display_First);
document.querySelector(".l_tab").addEventListener('click', display_Second);
document.querySelector(".m_tab").addEventListener('click', display_Third);
document.querySelector(".k_tab").addEventListener('click', display_Fourth);

function display_First() {
    document.querySelector(".c_tab").classList.toggle('TAB');
    document.querySelector(".first-tab").classList.toggle('clicked');
}
function display_Second() {
    document.querySelector(".l_tab").classList.toggle('TAB');
    document.querySelector(".second-tab").classList.toggle('clicked');
}
function display_Third() {
    document.querySelector(".m_tab").classList.toggle('TAB');
    document.querySelector(".third-tab").classList.toggle('clicked');
}
function display_Fourth() {
    document.querySelector(".k_tab").classList.toggle('TAB');
    document.querySelector(".fourth-tab").classList.toggle('clicked');
}