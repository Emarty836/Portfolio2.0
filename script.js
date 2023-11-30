//const leave = document.querySelector('.xBox');
// couldnt get [query selector all] to work on leave or single class containing same div for 5 classes
// therefore event listener wasnt working so had to create 5 new variables, functions, and variables.

const gitText = document.querySelector('#gitText');
const linkedinText = document.querySelector('#linkedinText');
const resumeText = document.querySelector('#resumeText');
const projectSection = document.querySelector('.projects');
const leave1 = document.querySelector('#P1 > .pRight > .xBox');
const leave2 = document.querySelector('#P2 > .pRight > .xBox');
const leave3 = document.querySelector('#P3 > .pRight > .xBox');
const leave4 = document.querySelector('#P4 > .pRight > .xBox');
const leave5 = document.querySelector('#P5 > .pRight > .xBox');
const leave6 = document.querySelector('#P6 > .pRight > .xBox');
const leave7 = document.querySelector('#P7 > .pRight > .xBox');
const previewBox = document.querySelector('.preview');
const previewBox1 = document.querySelector('#P1');
const viewOne = document.querySelector('.project-grid > div:nth-child(1) > .view');
const previewBox2 = document.querySelector('#P2');
const viewTwo = document.querySelector('.project-grid > div:nth-child(2) > .view');
const previewBox3 = document.querySelector('#P3');
const viewThree = document.querySelector('.project-grid > div:nth-child(3) > .view');
const previewBox4 = document.querySelector('#P4');
const viewFour = document.querySelector('.project-grid > div:nth-child(4) > .view');
const previewBox5 = document.querySelector('#P5');
const viewFive = document.querySelector('.project-grid > div:nth-child(5) > .view');
const previewBox6 = document.querySelector('#P6');
const viewSix = document.querySelector('.project-grid > div:nth-child(6) > .view');
const previewBox7 = document.querySelector('#P7');
const viewSeven = document.querySelector('.project-grid > div:nth-child(7) > .view');




viewOne.addEventListener('click',()=>{
    previewBox1.classList.add('reveal');
    console.log('one');
})

viewTwo.addEventListener('click',()=>{
    previewBox2.classList.add('reveal');
    console.log('two');
})

viewThree.addEventListener('click',()=>{
    previewBox3.classList.add('reveal');
    console.log('three');
})

viewFour.addEventListener('click',()=>{
    previewBox4.classList.add('reveal');
    console.log('four');
})

viewFive.addEventListener('click',()=>{
    previewBox5.classList.add('reveal');
    console.log('five');
})

viewSix.addEventListener('click',()=>{
    previewBox6.classList.add('reveal');
    console.log('six');
})

viewSeven.addEventListener('click',()=>{
    previewBox7.classList.add('reveal');
    console.log('seven');
})

function exitOut(){
    previewBox1.classList.remove('reveal');
    console.log('exit1');
}

function exitOut2(){
    previewBox2.classList.remove('reveal');
    console.log('exit2');
}

function exitOut3(){
    previewBox3.classList.remove('reveal');
    console.log('exit3');
}

function exitOut4(){
    previewBox4.classList.remove('reveal');
    console.log('exit4');
}

function exitOut5(){
    previewBox5.classList.remove('reveal');
    console.log('exit5');
}

function exitOut6(){
    previewBox6.classList.remove('reveal');
    console.log('exit6');
}

function exitOut7(){
    previewBox7.classList.remove('reveal');
    console.log('exit7');
}

let myMediaQuery2 = window.matchMedia('(max-width: 950px)');

function colorChange(){
    if(myMediaQuery2.matches) {
        if(scrollY>55){
            resumeText.style.color='white';
             }
            if(scrollY>105){
            linkedinText.style.color='white';
            }
            if(scrollY>155){
            gitText.style.color='white';
            }
            if(scrollY<55){
            resumeText.style.color='black';
             }
             if(scrollY<105){
            linkedinText.style.color='black';
            }
            if(scrollY<155){
            gitText.style.color='black';
            }
    }else{
        if(scrollY>220){
        resumeText.style.color='white';
         }
        if(scrollY>260){
        linkedinText.style.color='white';
        }
        if(scrollY>310){
        gitText.style.color='white';
        }
        if(scrollY<221){
        resumeText.style.color='black';
         }
         if(scrollY<261){
        linkedinText.style.color='black';
        }
        if(scrollY<311){
        gitText.style.color='black';
        }
    }
}



//leave.addEventListener('click', exitOut);
leave1.addEventListener('click', exitOut);
leave2.addEventListener('click', exitOut2);
leave3.addEventListener('click', exitOut3);
leave4.addEventListener('click', exitOut4);
leave5.addEventListener('click', exitOut5);
leave6.addEventListener('click', exitOut6);
leave7.addEventListener('click', exitOut7);
window.addEventListener('scroll',colorChange);


