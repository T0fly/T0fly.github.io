let canClick = true;

function addGoodDeed() {
    if (canClick) {
        canClick = false;

        const textContainer = document.getElementById("text-container");
        const animatedText = document.createElement("div");
        animatedText.classList.add("animated-text");
        animatedText.textContent = "功德+1";
        textContainer.appendChild(animatedText);
        const muyuImg = document.getElementById("muyu-img");
        muyuImg.style.transform = "scale(0.8)";

        const audioClick = document.getElementById("audio-click");
        audioClick.play(); // 播放点击声音

        setTimeout(() => {
            textContainer.removeChild(animatedText);
            muyuImg.style.transform = "scale(1)";
            canClick = true;
        }, 500); // 设置延迟为0.5秒
    }
}

let autoKnockInterval = null;
let isAutoKnocking = false;

function toggleAutoKnock() {
    const toggleButton = document.getElementById("toggleAutoKnockButton");

    if (!isAutoKnocking) {
        // 启动自动敲击，每秒敲一次
        autoKnockInterval = setInterval(autoKnockMuyu, 1000);
        isAutoKnocking = true;
        toggleButton.textContent = "停止敲击";
    } else {
        // 停止自动敲击
        clearInterval(autoKnockInterval);
        isAutoKnocking = false;
        toggleButton.textContent = "自动敲击";
    }
}

function autoKnockMuyu() {
    // 模拟点击木鱼
    addGoodDeed();
}