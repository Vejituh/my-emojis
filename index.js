const emojis = ["🕺", "⚽", "🎮", "🐻"];

const showEmojis = document.getElementById("showEmojis")
const inputEmoji = document.getElementById("inputEmoji");
const addStartBtn = document.getElementById("addEmojiStart");
const addEndBtn = document.getElementById("addEmojiEnd");
const removeStartBtn = document.getElementById("removeEmojiStart");
const removeEndBtn = document.getElementById("removeEmojiEnd");

const updateDisplay = () => {
    showEmojis.textContent = "";
    for (let i = 0; i < emojis.length; i++) {
        showEmojis.textContent += emojis[i];
    }
}

const checkInput = () => {
    console.log(inputEmoji.value)
    if (inputEmoji.value) {
        inputEmoji.value = "";
        updateDisplay();
    }
}

updateDisplay()

addStartBtn.addEventListener("click", () => {
    emojis.unshift(inputEmoji.value);
    checkInput();
})

addEndBtn.addEventListener("click", () => {
    emojis.push(inputEmoji.value);
    checkInput();
})

removeStartBtn.addEventListener("click", () => {
    emojis.shift();
    updateDisplay();
})

removeEndBtn.addEventListener("click", () => {
    emojis.pop();
    updateDisplay();
})