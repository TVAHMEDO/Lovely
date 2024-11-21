const startButton = document.getElementById('startButton');
const popup = document.getElementById('popup');
const nextButton = document.getElementById('nextButton');
const messageBox = document.getElementById('message');

const messages = [
  "Hey, you! 👋",
  "Do you know how amazing you are? 💫",
  "You light up my world like no one else 🌟",
  "With every moment, I realize something special...",
  "You're the reason for my smile, my laughter, my everything ❤️",
  "And now, here's what I've been wanting to tell you...",
  " **** u :)"
];

let currentMessageIndex = 0;

startButton.addEventListener('click', () => {
  popup.classList.remove('hidden');
  messageBox.textContent = messages[currentMessageIndex];
});

nextButton.addEventListener('click', () => {
  currentMessageIndex++;
  if (currentMessageIndex < messages.length) {
    messageBox.textContent = messages[currentMessageIndex];
  } else {
    popup.classList.add('hidden');
    alert("Thanks for being you! 💕");
  }
});