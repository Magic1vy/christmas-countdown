particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 800,
            "density": {
                "enable": true,
                "value_area": 600
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "opacity": {
            "value": 0.7,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canva",
        "events": {
            "onhover": {
            "enable": false,
            "mode":  "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "bubble"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 100,
                "size": 10,
                "duration": 2,
                "opacity": 1,
                "speed": 8
            },
            "repulse": {
                "distance": 100,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

const btn = document.querySelector("#btn");
btn.addEventListener ("click", function(){
    document.querySelector("#myAudio").play();
})


function christmasCountdown(){
    const christmasDate = new Date ("December 25, 2023 00:00")
    const now = new Date();
    const diff = christmasDate - now;
    
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector (".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector (".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector (".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute / msInSecond));
    document.querySelector (".seconds").textContent = displaySecond;

    if (diff <= 0){
        document.querySelector (".days").textContent = 0;
        document.querySelector (".hours").textContent = 0;
        document.querySelector (".minutes").textContent = 0;
        document.querySelector (".seconds").textContent = 0;
        clearInterval(timerID);
        merryChristmas();
    }

    
}
let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const header = document.querySelector ("h1");
    header.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!";
    header.classList.add("red");
}



