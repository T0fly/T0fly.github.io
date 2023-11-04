function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = timeString;

    requestAnimationFrame(displayTime); // 使用 requestAnimationFrame 来更新时间
}

displayTime(); // 初始化时间显示


function toggleFullScreen() {
    var element = document.documentElement;

    if (!document.fullscreenElement) {
        element.requestFullscreen().catch(err => {
            console.error(`全屏请求失败: ${err}`);
        });
    } else {
        document.exitFullscreen();
    }

}

function updateProgress() {
    var currentTime = new Date();
    var hour = currentTime.getHours() % 24; // 使用24小时制
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();

    var hourProgress = document.getElementById("hour-progress");
    var minuteProgress = document.getElementById("minute-progress");
    var secondProgress = document.getElementById("second-progress");

    var hourPercentage = (hour / 24) * 100; // 24小时制
    var minutePercentage = (minute / 60) * 100;
    var secondPercentage = (second / 60) * 100;

    hourProgress.style.background = `conic-gradient(#3498db ${hourPercentage}%, transparent ${hourPercentage}%)`;
    minuteProgress.style.background = `conic-gradient(#3498db ${minutePercentage}%, transparent ${minutePercentage}%)`;
    secondProgress.style.background = `conic-gradient(#3498db ${secondPercentage}%, transparent ${secondPercentage}%)`;

    requestAnimationFrame(updateProgress); // 使用 requestAnimationFrame 来更新进度
}

updateProgress(); // 初始化进度

// 获取深色模式按钮和整个页面的 body 元素
var darkModeButton = document.getElementById("toggleDarkModeButton");
var body = document.body;

// 按钮单击事件处理程序
darkModeButton.addEventListener("click", function () {
    if (body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// 启用深色模式
function enableDarkMode() {
    body.classList.add("dark-mode");
}

// 禁用深色模式
function disableDarkMode() {
    body.classList.remove("dark-mode");
}
