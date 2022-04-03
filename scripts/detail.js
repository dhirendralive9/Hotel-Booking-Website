const slider = document.querySelectorAll('.sliderMode');
const controls = document.querySelectorAll('.controls');

let currentSlider = 0;

slideControl = (click)=>{
   
    if(click === "next"){
        slider[currentSlider].classList.toggle('displayNone');
        if(currentSlider == (slider.length-1)){
            slider[0].classList.toggle('displayNone');
            currentSlider = 0;
        }else {
            slider[currentSlider+1].classList.toggle('displayNone');
            currentSlider++;
        }
    }else {
        slider[currentSlider].classList.toggle('displayNone');
         if(currentSlider == 0){
            slider[slider.length-1].classList.toggle('displayNone');
            currentSlider = slider.length-1;
         }else{
            slider[currentSlider-1].classList.toggle('displayNone');
            currentSlider--;
         }

    }
    
};


controls.forEach(x=>{
    x.addEventListener('click', (e)=>{
        console.log(x.id);
        slideControl(x.id);
    });
})

setInterval(myGreet,3000);

function myGreet() {
    
    slideControl('next');
}