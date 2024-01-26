
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe)

const savedTime = localStorage.getItem("videoplayer-current-time")

player.on('timeupdate', function (data) {
    const currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
});

const updateStorage = throttle(function () {
    localStorage.setItem("videoplayer-current-time", iframe.currentTime)
}, 1000);


iframe.addEventListener('timeupdate', updateStorage)
    
player.getDuration().then(function (duration) {
     if (savedTime && savedTime >= 0 && savedTime <= duration) {
        player.setCurrentTime(savedTime)
    }
})




   
