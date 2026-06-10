window.onload = function () {

    // Cursor Glow
    const glow = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove", (e) => {

        if (glow) {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        }

    });

 const jarvisBtn = document.querySelector(".jarvis-btn");
const chatBox = document.getElementById("chatBox");

let greeted = false;

if(jarvisBtn && chatBox){

    jarvisBtn.onclick = () => {

        if(chatBox.style.display === "block"){

            chatBox.style.display = "none";

        }else{

            chatBox.style.display = "block";

            if(!greeted){

                speak(
                    "Hello . Welcome to Abinesh's portfolio. I am Jarvis. Feel free to explore my skills, projects and achievements."
                );

                greeted = true;
            }

        }

    };

}
    

};

// ==========================
// SPEAK FUNCTION
// ==========================

function speak(text){

    speechSynthesis.cancel();

    const speech =
    new SpeechSynthesisUtterance(text);

    const voices =
    speechSynthesis.getVoices();

    speech.voice =
    voices.find(v =>
        v.name === "Google UK English male"
    ) || voices[0];

    speech.rate = 1;
    speech.pitch = 1.1;
    speech.volume = 1;

    const jarvisBtn =
    document.querySelector(".jarvis-btn");

    // Start glow animation

    if(jarvisBtn){
        jarvisBtn.classList.add("jarvis-speaking");
    }

    speech.onend = () => {

        if(jarvisBtn){
            jarvisBtn.classList.remove("jarvis-speaking");
        }

    };

    speechSynthesis.speak(speech);

}

// ==========================
// SEND MESSAGE
// ==========================

function sendMessage() {

    let input = document.getElementById("userInput");

    let msg = input.value.trim().toLowerCase();

    if (msg === "") return;

    let reply = "";

    // Greetings
    if (
        msg.includes("hi") ||
        msg.includes("hello") ||
        msg.includes("hey")
    ) {

        reply = "Hello  I'm JARVIS. Welcome to Abinesh's portfolio.";

    }

    else if(msg.includes("who is abinesh")){

    reply =
    "Abinesh is an AIML student passionate about Artificial Intelligence, Machine Learning and innovative technology.";
}

    else if(msg.includes("goal")){

    reply =
    "My goal is to become an AI Engineer and build impactful AI solutions that help people.";
}

    else if(msg.includes("why should i hire abinesh")){

    reply =
    "Abinesh combines AI, Machine Learning, Web Development and problem solving skills while actively building real-world projects.";
}

    else if(msg.includes("who is abinesh")){

    reply =
    "Abinesh is an AIML student passionate about Artificial Intelligence, Machine Learning and software development.";

}

else if(msg.includes("hire")){

    reply =
    "Abinesh combines AI, web development and problem-solving skills while actively building real-world projects.";

}

else if(msg.includes("goal")){

    reply =
    "His goal is to become an AI Engineer and build impactful AI solutions.";

}

    // About
    else if (
        msg.includes("who are you") ||
        msg.includes("abinesh")
    ) {

        reply =
            "Abinesh is an AIML student passionate about Artificial Intelligence, Machine Learning and Web Development.";

    }

    // Skills
    else if (
        msg.includes("skills") ||
        msg.includes("show skills")
    ) {

        reply =
            "Python, AI ML, Deep Learning, JavaScript, HTML CSS, MySQL, MongoDB and Scikit Learn.";

        const skills = document.getElementById("skills");

        if (skills) {
            skills.scrollIntoView({
                behavior: "smooth"
            });
        }

    }

    // Projects
    else if (
        msg.includes("projects") ||
        msg.includes("show projects")
    ) {

        reply =
            "Opening projects section.";

        const projects = document.getElementById("projects");

        if (projects) {
            projects.scrollIntoView({
                behavior: "smooth"
            });
        }

    }

    // Contact
    else if (
        msg.includes("contact") ||
        msg.includes("email")
    ) {

        reply =
            "You can contact Abinesh at neshabinesh2008@gmail.com";

        const contact = document.getElementById("contact");

        if (contact) {
            contact.scrollIntoView({
                behavior: "smooth"
            });
        }

    }

    // GitHub
    else if (
        msg.includes("github") ||
        msg.includes("open github")
    ) {

        reply = "Opening GitHub.";

        window.open(
            "https://github.com/abinesh-yt",
            "_blank"
        );

    }

    // LinkedIn
    else if (
        msg.includes("linkedin") ||
        msg.includes("open linkedin")
    ) {

        reply = "Opening LinkedIn.";

        window.open(
            "https://www.linkedin.com/in/abinesh-dev01/",
            "_blank"
        );

    }

    // Joke
    else if (
        msg.includes("joke")
    ) {

        reply =
            "Why do programmers prefer dark mode? Because light attracts bugs! 😂";

    }

    // Resume
    else if (
        msg.includes("resume")
    ) {

        reply = "You can download Abinesh's resume from the Resume button above.";

    }

    // Default
    else {

        reply =
            reply = reply = "I couldn't find that information. For more details, please contact Abinesh via LinkedIn or email.";

    }

    // Chat Messages

    document.getElementById("chatMessages").innerHTML +=

        "<br><br><b>You:</b> " + msg +

        "<br><b>JARVIS:</b> " + reply;

    const chatMessages =
document.getElementById("chatMessages");

chatMessages.scrollTop =
chatMessages.scrollHeight;

    // Speak Reply

    speak(reply);

    // Clear Input

    input.value = "";

}

// ==========================
// ENTER KEY
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const input =
        document.getElementById("userInput");

    if (input) {

        input.addEventListener("keypress",

            function (event) {

                if (event.key === "Enter") {

                    sendMessage();

                }

            }

        );

    }

});

// ==========================
// VOICE RECOGNITION
// ==========================

function startListening() {

    if (
        !('webkitSpeechRecognition' in window)
    ) {

        alert(
            "Speech Recognition not supported in this browser."
        );

        return;

    }

    const recognition =
        new webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = function (event) {

        const text =
            event.results[0][0].transcript;

        document.getElementById("userInput").value =
            text;

        sendMessage();

    };

}
function quickCommand(text){

    document.getElementById("userInput").value = text;

    sendMessage();

}
function recruiterMode(){

    document.getElementById("projects")
    .scrollIntoView({
        behavior:"smooth"
    });

    speak(
        "Recruiter mode activated. Displaying projects and achievements."
    );
}

const progressSection =
document.querySelector(".ai-progress");

if(progressSection){

    const observer =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                document
                .querySelectorAll(".bar span")
                .forEach(bar=>{

                    bar.style.width = "0";

                    setTimeout(()=>{

                        bar.style.width =
                        bar.dataset.width;

                    },100);

                });

            }

        });

    },{

        threshold:0.4

    });

    observer.observe(progressSection);

}

let count = 0;

const timer = setInterval(()=>{

    count++;

    document.getElementById(
        "projectCount"
    ).innerText = count;

    if(count >= 15){
        clearInterval(timer);
    }

},100);
const terminalLines = [
"> Initializing Neural Network...",
"> Loading Machine Learning Models...",
"> Connecting JARVIS Assistant...",
"> Status: READY ✅"
];

const terminal =
document.querySelectorAll(".terminal-line");

let i = 0;

function runTerminal(){

    if(i < terminalLines.length){

        terminal[i].textContent =
        terminalLines[i];

        i++;

        setTimeout(
            runTerminal,
            1000
        );

    }

}
