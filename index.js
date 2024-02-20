document.addEventListener("DOMContentLoaded", function() {
    const text = "As a Software Engineer, I am passionate about leveraging technology to create innovative solutions and contribute to the ever-evolving landscape of the development industry. I am a dedicated and quick learner, always eager to explore new technologies and methodologies. Open collaboration and continuous learning from industry professionals are integral to my growth. Choosing me means gaining a motivated and adaptable team member who is committed to delivering high-quality solutions. I bring a blend of technical proficiency, a strong work ethic, and a passion for continuous improvement.";

    const typingTextElement = document.getElementById("typing-text");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 120); // Adjust the timeout value for typing speed
        }
    }

    typeText();
});