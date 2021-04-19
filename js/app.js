let accordions = document.querySelectorAll(".accordion");

for(let i = 0; i<accordions.length; i++){
    accordions[i].addEventListener("click", ()=>{
        accordions[i].classList.toggle("active");
    });
}