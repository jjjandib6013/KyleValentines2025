const messages = [
    "Please, just one conversation.",
    "I just want to understand...",
    "If this is really the end, let’s not leave it like this.",
    "I still care about you, no matter what.",
    "Even if we can't fix this, can we at least talk?",
    "I don’t want to walk away with regrets...",
    "Can we just have one last honest conversation?",
    "Just hear me out, that’s all I ask.",
    "Okay… if you’re sure, I won’t push anymore.",
    "But if you ever change your mind, I’ll still be here."
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImage = document.querySelector('.gif_container img');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    gifImage.src = "https://media.tenor.com/ggokQeI5AMMAAAAj/sanrio-white.gif";

    gifImage.style.width = "200px";
    gifImage.style.height = "auto";
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
