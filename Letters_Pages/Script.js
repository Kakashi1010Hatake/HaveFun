class SpecialHeader2 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="logo">
            <p onclick="OpenMenu()">Porn<span>Tube</span></p>
        </div>
            <div class="close_btn"><i class="material-icons" onclick="CloseMenu()">close</i></div>
            <section class="sidebar">
                <div class="mine">
                    <div class="log">
                        <a href="../index.html"><i class="material-icons">settings</i></a>
                    </div>
                    <div class="user">
                        <div class="circle_one">
                            <div class="circle_two">
                                <div class="circle_third">
                                    <p class="user../Pic">J</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="log">
                        <a href="../index.html"><i class="material-icons">exit_to_app</i></a>
                    </div>
                </div>
                <nav>
                    <ul class="ul">
                        <li class="homy"><a href="../Main.html">Home</a></li>
                        <li><a href="A_Page.html">PornStar</a></li>
                        <li><a href="../Collections.html">Collections</a></li>
                        <li><a href="../Lesbian/01.html">Lesbian</a></li>
                        <li><a href="../Masturbation/01.html">Mastrbution</a></li>
                        <li><a href="../Movies.html">Movies</a></li>
                        <li class="Lut"><a href="../index.html">Log Out</a></li>
                    </ul>
                </nav>
            </section>
        </header>
        `
    }
}

customElements.define('special-header2', SpecialHeader2);


document.querySelector('.light').style.background = "rgb(248, 152, 30)";
document.querySelector('.light').style.filter = "drop-shadow(5px 5px 5px black)";

let sideBar = document.querySelector(".sidebar");
let close = document.querySelector(".close_btn");

function OpenMenu() {
    close.style.opacity = 1;
    sideBar.style.left = 0;
}
function CloseMenu() {
    close.style.opacity = 0;
    sideBar.style.left = "-75%";
}

let btn = document.querySelector(".btn");
let header = document.querySelector("header");

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