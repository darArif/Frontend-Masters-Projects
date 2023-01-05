const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");


function pageTransition() {
    for(let i=0; i<sectBtn.length; i++) {
        sectBtn[i].addEventListener("click", function() {
            let prevActiveBtn = document.querySelectorAll(".active-btn");
            prevActiveBtn[0].className = prevActiveBtn[0].className.replace(" active-btn", "");
            this.className += " active-btn";
        })
    }

    allSections[0].addEventListener("click", (e)=>{
        const id = e.target.dataset.id;
        if(id) {
            sectBtn.forEach((btn)=>{
                btn.classList.remove("active");
            })

            e.target.classList.add("active");

            sections.forEach((section)=> {
                section.classList.remove("active");
            })

            document.getElementById(id).classList.add("active");
        }
    })
}

pageTransition();

const me = {
    name : "Arif",
    getName() {
        return `Your name is ${this.name}`;
    }
}

let a = me.getName;

console.log(a());
