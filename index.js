var typed = new Typed(".typing", {
    strings: ["", "Web developer", "Frontend developer", "Web designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

const nav = document.querySelector(".nav");
const navlist = document.querySelectorAll("li")
const totalNavList = navlist.length
const sections = document.querySelectorAll(".section")
const totalsection = sections.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navlist[j].querySelector("a").classList.remove("active");
        }
        for (let i = 0; i < totalsection; i++) {
            sections[i].classList.add("hidden");
        }
        sections[i].classList.remove("hidden");
        a.classList.add("active");
        show(this);
    })
}

function show(element) {
    for (let i = 0; i < totalsection; i++) {
        sections[i].classList.remove("action");
    }
    const href = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + href).classList.add("active");
}

let menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
    document.querySelector(".sidebar").style.display = "flex";
})


const menubtn = document.querySelector(".menu"),
    sidebar = document.querySelector(".sidebar");

menubtn.addEventListener("click", function () {
    sidebartogglerbtn();
})

function sidebartogglerbtn() {
    sidebar.classList.toggle("open");
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {

})
