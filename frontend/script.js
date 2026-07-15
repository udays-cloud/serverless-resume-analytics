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

// ================= Visitor Counter =================

const API_URL =
"https://qirpi9e0s0.execute-api.ap-south-1.amazonaws.com/visitor";

async function getVisitorCount() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        document.getElementById("visitorCount").textContent =
        data.visitorCount;

    }

    catch(error){

        console.error(error);

        document.getElementById("visitorCount").textContent = "Error";

    }

}

getVisitorCount();

async function getCountry(){

    try{

        const response = await fetch("https://ipapi.co/json/");

        const data = await response.json();

        document.getElementById("country").textContent =
        data.country_name;

    }

    catch{

        document.getElementById("country").textContent = "Unknown";

    }

}

getCountry();

function getDevice(){

    let device = "Desktop";

    if(/Mobi|Android/i.test(navigator.userAgent)){

        device = "Mobile";

    }

    else if(/Tablet|iPad/i.test(navigator.userAgent)){

        device = "Tablet";

    }

    document.getElementById("device").textContent = device;

}

const CONTACT_API =
"https://r82npgpoue.execute-api.ap-south-1.amazonaws.com/contact";

document
.getElementById("contactForm")
.addEventListener("submit", async function(event){

    event.preventDefault();

    const name =
        document.querySelector('input[type="text"]').value;

    const email =
        document.querySelector('input[type="email"]').value;

    const message =
        document.querySelector('textarea').value;

    try{

        const response = await fetch(CONTACT_API,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                name:name,
                email:email,
                message:message

            })

        });

        const data = await response.json();

        alert(data.message);

        document.getElementById("contactForm").reset();

    }

    catch(error){

        console.error(error);

        alert("Unable to send message.");

    }

});