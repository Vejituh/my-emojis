const emojis = ["🕺", "⚽", "🎮"];

let showEmojis = document.getElementById("showEmojis")
let inputEmoji = document.getElementById("inputEmoji");
let addStartBtn = document.getElementById("addEmojiStart");

const updateDisplay = () => {
    for (let i = 0; i < emojis.length; i++) {
        showEmojis.textContent += emojis[i];
    }
}

const checkInput = () => {
    console.log(inputEmoji.value)
    if (inputEmoji.value) {
        showEmojis.textContent = "";
        inputEmoji.value = "";
        updateDisplay();
    }
}

updateDisplay()

addStartBtn.addEventListener("click", () => {
    emojis.push(inputEmoji.value);
    checkInput();
})