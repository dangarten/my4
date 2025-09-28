 const hoversoundeffect = new Audio('audio/hoverse.mp3');
    function playhoversoundeffect() {
        hoversoundeffect.currentTime = 0; 
        hoversoundeffect.play();
    }

 const backgroundmusic = new Audio('./music/april14th.mp3');
    function togglemusic() {
        if (backgroundmusic.paused) {
            backgroundmusic.play();
            document.getElementById("buttonmusic").src = "../images/icons/volumeon.svg";
        } else {
            document.getElementById("buttonmusic").src = "../images/icons/volumeoff.svg"; }
        backgroundmusic.loop = true;
        backgroundmusic.volume = 0.1;
    }