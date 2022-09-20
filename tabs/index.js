console.log("hello world")
const goal = document.getElementById("goal")
const service = document.getElementById("service")
const about = document.getElementById("about")
const text = document.querySelector(".text")
const serviceText = document.querySelector(".service-text")
const goalText = document.querySelector(".goal-text")

const abouts = about.addEventListener("click" , () => {
    serviceText.classList.add("none")
    service.classList.remove("bottom")
    about.classList.add("bottom")
    text.classList.remove("none")
    goal.classList.remove("bottom")
    goalText.classList.add("none")

})

window.addEventListener("DOMContentLoaded", () => {
    about.classList.add("bottom")
})



service.addEventListener("click" , () => {
   text.classList.add("none")
   serviceText.classList.remove("none")
   service.classList.add("bottom")
   about.classList.remove("bottom")
   goal.classList.remove("bottom")
   
})

goal.addEventListener("click" ,() => {
    goal.classList.add("bottom")
    service.classList.remove("bottom")
    about.classList.remove("bottom")
    goalText.classList.remove("none")
    text.classList.add("none")
    
})

