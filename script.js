       // Hover Sound Effect
const hoversoundeffect = new Audio('audio/hoverse.mp3');
    function playhoversoundeffect() {
        hoversoundeffect.currentTime = 0; 
        hoversoundeffect.play();
    }
// Background Music
 const backgroundmusic = new Audio('music/april14th.mp3');
    backgroundmusic.loop = true;
        backgroundmusic.volume = 0.1;
    function togglemusic() {
        if (backgroundmusic.paused) {
            backgroundmusic.play();
            document.getElementById("buttonmusic").src = "images/icons/volumeon.png";
        }else {
            backgroundmusic.pause();
            document.getElementById("buttonmusic").src = "images/icons/volumeoff.png";
        }
    }
togglemusic();
// Calendar 
function calendar() {
    const divcalendar = document.querySelector('.calendar');
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const weekday = weekdays[today.getDay()];
    divcalendar.innerHTML = `<span>${day}/${month}</span> <span class="day">${weekday}</span>`;
}
calendar();


window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        location.reload();
    }
});