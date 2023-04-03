const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const slides=document.querySelectorAll(".slide");
let counter=0;

const slider=slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`;
    console.log(slides.length);
})

next.addEventListener("click",()=>{
    if(counter>=0 && counter<slides.length-1){
        counter++;
        sliding();
    }
    else{
        counter=0;
        sliding();

    }
})

prev.addEventListener("click",()=>{
    if(counter<=0){
        counter=slides.length-1;
        sliding();
    }else{
        counter--;
        sliding();
    }
})


function sliding(){
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`;
    })
}