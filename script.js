window.onload = function () {

    // Cursor Glow
    const glow = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove", (e) => {

        if (glow) {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        }

    });

    // JARVIS Button
    const jarvisBtn = document.querySelector(".jarvis-btn");
    const chatBox = document.getElementById("chatBox");

    if (jarvisBtn && chatBox) {

        jarvisBtn.onclick = () => {

            if (chatBox.style.display === "block") {
                chatBox.style.display = "none";
            } else {
                chatBox.style.display = "block";
            }

        };

    }

    // Enter Key Support
    const userInput = document.getElementById("userInput");

    if (userInput) {

        userInput.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {
                sendMessage();
            }

        });

    }

    // Welcome Voice
    setTimeout(() => {

        const speech = new SpeechSynthesisUtterance(
            "Hello Abinesh. JARVIS online."
        );

        speech.rate = 1;
        speech.pitch = 1;

        speechSynthesis.speak(speech);

    }, 1500);

};

function sendMessage() {

    const input = document.getElementById("userInput");
    const chatMessages = document.getElementById("chatMessages");

    let msg = input.value.trim().toLowerCase();

    if (msg === "") return;

    const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    chatMessages.innerHTML +=
        `<br><br>
        <b>You</b> <small>${time}</small>: ${msg}
        <br>
        <b>JARVIS</b>: Typing...`;

    chatMessages.scrollTop = chatMessages.scrollHeight;

    input.value = "";

    setTimeout(() => {

        let reply = "";

        if (
            msg.includes("hi") ||
            msg.includes("hello") ||
            msg.includes("hey")
        ) {

            reply = "Hello 👋 I'm JARVIS. Welcome to Abinesh's portfolio!";

        }

        else if (
            msg.includes("who are you") ||
            msg.includes("about")
        ) {

            reply =
                "I'm JARVIS, the AI assistant of Abinesh, an AIML student and future AI Engineer.";

        }

        else if (msg.includes("name")) {

            reply =
                "My creator is Abinesh, an AIML student and future AI Engineer 😎";

        }

        else if (msg.includes("skills")) {

            reply =
                "Python, AI/ML, Deep Learning, HTML, CSS, JavaScript, MySQL, MongoDB and Scikit-Learn.";

        }

        else if (msg.includes("project")) {

            reply =
                "Portfolio Website, Birthday Wish Website and AI Spam Detection.";

        }

        else if (msg.includes("contact")) {

            reply =
                "Email: neshabinesh2008@gmail.com";

        }

        else if (msg.includes("github")) {

            reply =
                "GitHub: github.com/abinesh-yt";

        }

        else if (msg.includes("linkedin")) {

            reply =
                "LinkedIn profile available in Contact section.";

        }

        else if (msg.includes("college")) {

            reply =
                "Abinesh is pursuing AIML Engineering and building AI projects.";

        }

        else if (msg.includes("resume")) {

            reply =
                "Resume section is coming soon 🚀";

        }

        else if (msg.includes("joke")) {

            reply =
                "Why do programmers prefer dark mode? Because light attracts bugs 😂";

        }

        else if (msg.includes("open github")) {

            window.open(
                "https://github.com/abinesh-yt",
                "_blank"
            );

            reply = "Opening GitHub 🚀";

        }

        else if (msg.includes("open linkedin")) {

            reply = "Opening LinkedIn 🚀";

        }

        else {

            reply =
                "I don't know that yet 😅";

        }

        let content = chatMessages.innerHTML;

        content = content.replace(
            "<b>JARVIS</b>: Typing...",
            `<b>JARVIS</b> <small>${time}</small>: ${reply}`
        );

        chatMessages.innerHTML = content;

        // Voice Reply
        const speech = new SpeechSynthesisUtterance(reply);

        speech.rate = 1;
        speech.pitch = 1;

        speechSynthesis.speak(speech);

        chatMessages.scrollTop = chatMessages.scrollHeight;

    }, 1000);

}