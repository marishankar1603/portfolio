/*
=========================================
Loader
=========================================
*/

const loader = document.querySelector("#loader");

const loadingText = document.querySelector("#loading-text");

const progress = document.querySelector(".loader-progress");

const loadingSteps = [

"Loading Java...",

"Loading SQL...",

"Loading Spring Boot...",

"Loading Projects...",

"Loading Portfolio..."

];

let currentStep = 0;

function runLoader(){

    loadingText.textContent = loadingSteps[currentStep];

    progress.style.width =

    ((currentStep+1)/loadingSteps.length)*100+"%";

    currentStep++;

    if(currentStep < loadingSteps.length){

        setTimeout(runLoader,500);

    }

    else{

        setTimeout(()=>{

            loader.classList.add("hide");

        },700);

    }

}

window.addEventListener("load",runLoader);
