const roles = [

    "AWS Cloud Engineer",

    "Cloud Enthusiast",

    "Cybersecurity Learner",

    "ServiceNow Certified"

];

let roleIndex = 0;

let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typing.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex>0){

        typing.textContent=roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        roleIndex++;

        if(roleIndex>=roles.length){

            roleIndex=0;

        }

        setTimeout(typeEffect,300);

    }

}

typeEffect();


// Temporary data until AWS backend is connected

document.getElementById("visitorCount").innerHTML = "1";

document.getElementById("country").innerHTML = "India";

document.getElementById("device").innerHTML = "Desktop";

// Temporary Contact Form

document
.getElementById("contactForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank you! AWS backend will be connected in the next phase.");

});