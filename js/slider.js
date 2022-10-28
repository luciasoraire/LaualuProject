const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];



slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll (".slider__section")[0];
    
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "0%";
    }, 1000);
}



setInterval(function(){
    Next();
}, );
