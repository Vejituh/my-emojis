const emojis = ["🕺", "⚽", "🎮"];

let showEmojis = document.getElementById("showEmojis")

for (let i = 0; i < emojis.length; i++) {
    showEmojis.textContent += emojis[i];
}