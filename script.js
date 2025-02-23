const messages = [
    "Sure kana ba?",
    "Sure ka diyan?",
    "Hindi naba talaga?",
    "☹️...",
    "Is it a no naba?",
    "Wawa naman ako😟...",
    "I'll take responsibility naman ohh...",
    "I'll do my best naman...",
    "Okay sige😟...",
    "Sad nakooo 😟"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}