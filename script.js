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
        v.name === "Google UK English Female"
    );

    speech.rate = 0.95;
    speech.pitch = 1.15;
    speech.volume = 1;

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

        reply = "Hello 👋 I'm JARVIS. Welcome to Abinesh's portfolio.";

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
            "I don't know that yet 😅 Try skills, projects, github, linkedin or contact.";

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