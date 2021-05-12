var lastScrollTop = 0;
window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        console.log("scroll down")
    } else {
        console.log("scroll up")
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);


// all variables
let video = document.getElementById("video")
let videoCon = document.querySelector(".videoContainer")
let buttonFullscreen = document.getElementById("fullscreen")
let slider = document.getElementById("volume");
let playAndPause = document.getElementById("playAndPause")
let playIcon = document.getElementById("playIcon")
let allVideo = document.querySelectorAll("video")



// all Event Listeners
playAndPause.addEventListener("click", vPlayAndPause)
buttonFullscreen.addEventListener("click", vFullscreen)
videoCon.addEventListener("dblclick", fullVideo)
video.addEventListener("dblclick", exitFullScreen)

function fullVideo() {
    video.requestFullscreen()
}

function exitFullScreen() {
    video.exit
}

// video buffering functions
video.onwaiting = function () {
    document.getElementById("loading").innerHTML = `
    <div class="loader loader--style3" title="2">
    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px"
        viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <path fill="#000"
            d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25"
                to="360 25 25" dur="0.6s" repeatCount="indefinite" />
        </path>
    </svg>
</div>`
};
video.onplaying = function () {
    document.getElementById("loading").innerHTML = ""
};

// video play and pause functions
function vPlayAndPause() {
    playAndPause.classList.toggle("playing")
    if (playAndPause.classList.contains("playing")) {
        video.play()
        document.querySelector("#playAndPause .svgImage").innerHTML = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-148"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" id="ytp-id-148"></path></svg>'

    } else {
        video.pause()
        document.querySelector("#playAndPause .svgImage").innerHTML = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-111"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-111"></path></svg>'
    }
}

if (video.ended) {
    playAndPause.innerHTML = '<i class="fa fa-refresh" aria-hidden="true"></i>'
}

// video full screen and full screen exit functions
function fullClose() {
    video.closeFullscreen()
}

function vFullscreen() {
    video.requestFullscreen()
}
let audioVol
// video timebar and video duration 
slider.oninput = function () {
    audioVol = this.value / 100
    video.volume = audioVol
}

const timer = document.getElementById("timer");

function progressLoop() {
    setInterval(function () {
        let videoDuration = video.duration
        let vcureentTime = video.currentTime
        var hours = Math.floor(videoDuration / 60 / 60);
        var minutes = Math.floor(videoDuration / 60) - (hours * 60);
        var seconds = videoDuration % 60;
        seconds = seconds.toFixed(0)

        var cuMinutes = Math.floor(video.currentTime / 60) - (hours * 60);
        var cuSeconds = video.currentTime % 60;
        cuSeconds = cuSeconds.toFixed(0)

        timer.innerHTML = cuMinutes.toString().padStart(2, '0') + ":" + cuSeconds.toString().padStart(2, '0') + " / " + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');



        // video quality change
        let videoQue144p = document.getElementById("videoQue144p")
        let videoQue240p = document.getElementById("videoQue240p")
        let videoQue360p = document.getElementById("videoQue360p")
        let videoQue480p = document.getElementById("videoQue480p")
        let videoQue720p = document.getElementById("videoQue720p")
        let videoQue1080p = document.getElementById("videoQue1080p")

        videoQue144p.addEventListener("click", videoQue144pdone)
        videoQue240p.addEventListener("click", videoQue240pdone)
        videoQue360p.addEventListener("click", videoQue360pdone)
        videoQue480p.addEventListener("click", videoQue480pdone)
        videoQue720p.addEventListener("click", videoQue720pdone)
        videoQue1080p.addEventListener("click", videoQue1080pdone)

        function videoQue144pdone() {
            video.src = "https://yt-video-player-4525d.web.app/video_144P.mp4"
            video.currentTime = vcureentTime
            var playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                        video.play();
                    })
                    .catch(error => {});
            }
        }

        function videoQue240pdone() {
            video.src = "https://yt-video-player-4525d.web.app/video_240P.mp4"
            video.currentTime = vcureentTime
            var playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                        video.play();
                    })
                    .catch(error => {});
            }
        }

        function videoQue360pdone() {
            video.src = "https://yt-video-player-4525d.web.app/video_360P.mp4"
            video.currentTime = vcureentTime
            var playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                        video.play();
                    })
                    .catch(error => {});
            }
        }

        function videoQue480pdone() {
            video.src = "https://yt-video-player-4525d.web.app/video_480P.mp4"
            video.currentTime = vcureentTime
            var playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                        video.play();
                    })
                    .catch(error => {});
            }
        }

        function videoQue720pdone() {
            video.src = "https://yt-video-player-4525d.web.app/video_720P.mp4"
            video.currentTime = vcureentTime
            var playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                        video.play();
                    })
                    .catch(error => {});
            }
        }

        function videoQue1080pdone() {
            video.src = "https://yt-video-player-4525d.web.app/video_1080P.mp4"
            video.currentTime = vcureentTime
            var playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                        video.play();
                    })
                    .catch(error => {});
            }
        }
    });
}

video.addEventListener("play", progressLoop);


// video duration change

let sliderDu = document.getElementById("duration_slider")

function change_duration() {
    slider_position = video.duration * (sliderDu.value / 100);
    video.currentTime = slider_position;
}
setInterval(range_slider, 1000);

function range_slider() {
    let position = 0;

    // update slider position
    if (!isNaN(video.duration)) {
        position = video.currentTime * (100 / video.duration);
        sliderDu.value = position;
    }
}


// auto play
video.onended = function () {
    sliderDu.value = 0
    video.play()
}


// video playback speed

let vidSpeed25 = document.getElementById("speedValue-0.25")
let vidSpeed50 = document.getElementById("speedValue-0.50")
let vidSpeed75 = document.getElementById("speedValue-0.75")
let vidSpeedNormal = document.getElementById("speedValue-normal")
let vidSpeed125 = document.getElementById("speedValue-1.25")
let vidSpeed150 = document.getElementById("speedValue-1.50")
let vidSpeed175 = document.getElementById("speedValue-1.75")
let vidSpeed200 = document.getElementById("speedValue-2.00")
let vidSpeed400 = document.getElementById("speedValue-4.00")

vidSpeed25.addEventListener("click", vidPlayingSpeed25)
vidSpeed50.addEventListener("click", vidPlayingSpeed50)
vidSpeed75.addEventListener("click", vidPlayingSpeed75)
vidSpeedNormal.addEventListener("click", vidPlayingSpeedNor)
vidSpeed125.addEventListener("click", vidPlayingSpeed125)
vidSpeed150.addEventListener("click", vidPlayingSpeed150)
vidSpeed175.addEventListener("click", vidPlayingSpeed175)
vidSpeed200.addEventListener("click", vidPlayingSpeed200)
vidSpeed400.addEventListener("click", vidPlayingSpeed400)

function vidPlayingSpeed25() {
    video.playbackRate = vidSpeed25.value
}

function vidPlayingSpeed50() {
    video.playbackRate = vidSpeed50.value
}

function vidPlayingSpeed75() {
    video.playbackRate = vidSpeed75.value
}

function vidPlayingSpeedNor() {
    video.playbackRate = vidSpeedNormal.value
}

function vidPlayingSpeed125() {
    video.playbackRate = vidSpeed125.value
}

function vidPlayingSpeed150() {
    video.playbackRate = vidSpeed150.value
}

function vidPlayingSpeed175() {
    video.playbackRate = vidSpeed175.value
}

function vidPlayingSpeed200() {
    video.playbackRate = vidSpeed200.value
}

function vidPlayingSpeed400() {
    video.playbackRate = vidSpeed400.value
}


window.addEventListener("keydown", function (e) {
    let skip5 = e.keyCode
    if (skip5 === 37) {
        video.currentTime = video.currentTime - 5
    } else if (skip5 === 39) {
        video.currentTime = video.currentTime + 5
    } else if (skip5 === 38) {
        document.getElementById("volume").value = document.getElementById("volume").value + 5
    } else if (skip5 === 39) {
        document.getElementById("volume").value = document.getElementById("volume").value - 5
    }
})



// internet speed test
var imageAddr = "https://cdn.pixabay.com/photo/2020/07/06/01/33/forest-5375005__340.jpg";
var downloadSize = 4995374; //bytes

function ShowProgressMessage(msg) {
    if (console) {
        if (typeof msg == "string") {
            console.log(msg);
        } else {
            for (var i = 0; i < msg.length; i++) {
                console.log(msg[i]);
            }
        }
    }

    var oProgress = document.getElementById("progress");
    if (oProgress) {
        var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
        oProgress.innerHTML = actualHTML;
    }
}

function InitiateSpeedDetection() {
    ShowProgressMessage("Loading the image, please wait...");
    window.setTimeout(MeasureConnectionSpeed, 1);
};

if (window.addEventListener) {
    window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', InitiateSpeedDetection);
}

function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }

    download.onerror = function (err, msg) {
        ShowProgressMessage("Invalid image, or error downloading");
    }

    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
            "Your connection speed is:",
            speedBps + " bps",
            speedKbps + " kbps",
            speedMbps + " Mbps"
        ]);

        if (speedMbps < 5) {
            video.src = "https://yt-video-player-4525d.web.app/video_144P.mp4"
        } else if (speedMbps < 10) {
            video.src = "https://yt-video-player-4525d.web.app/video_240P.mp4"
        } else if (speedMbps < 15) {
            video.src = "https://yt-video-player-4525d.web.app/video_360P.mp4"
        } else if (speedMbps < 30) {
            video.src = "https://yt-video-player-4525d.web.app/video_480P.mp4"
        } else if (speedMbps < 40) {
            video.src = "https://yt-video-player-4525d.web.app/video_720P.mp4"
        } else if (speedMbps > 40) {
            video.src = "https://yt-video-player-4525d.web.app/video_1080P.mp4"
        }
    }
}


var settingsButton = document.getElementById("settings")
var speedButton = document.getElementById("speedButton")
var quality = document.getElementById("quality")

settingsButton.addEventListener("click", function () {
    document.getElementById("settings").classList.add("settingsStart")
    document.querySelector(".controlButton").style.display = "block"
    document.getElementById("speedButton").style.display = "block"
    document.getElementById("quality").style.display = "block"
})
speedButton.addEventListener("click", function () {
    document.getElementById("vidSpeed").style.display = "block"
    document.getElementById("videoQu").style.display = "none"
})
quality.addEventListener("click", function () {
    document.getElementById("vidSpeed").style.display = "none"
    document.getElementById("videoQu").style.display = "block"
})

