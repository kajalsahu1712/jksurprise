const password = prompt("Enter your birthday date: ddmmyy");

if(password !== "020605"){

    document.body.innerHTML = `
    <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:100px;
        background:black;
        color:white;
    ">
        Access Denied ❌
    </div>
    `;

    throw new Error("Wrong password");
}

const video = document.getElementById("mainVideo");
const text = document.getElementById("text");
const buttons = document.getElementById("buttons");

text.innerHTML =
"Hello Kuchupuchu 😘 A small surprise is waiting for u 🎁";

setTimeout(showIntro2,5000);

function changeVideo(file){
    video.innerHTML =
    `<source src="${file}" type="video/mp4">`;

    video.load();
    video.play();
}

//////////////// INTRO 2 //////////////////
function showIntro2(){

    changeVideo("v2.mp4");

    text.innerHTML =
    "Get ready babyyyyy ⏳";

    setTimeout(startCountdown,5000);
}

//////////////// COUNTDOWN //////////////////

function startCountdown(){

    video.style.display="none";
    buttons.innerHTML="";

    document.body.style.background="black";

    text.style.color="white";
    text.style.fontSize="80px";

    let count=15;

    const timer=setInterval(()=>{

        text.innerHTML=count;

        count--;

        if(count<0){

            clearInterval(timer);

            document.body.style.background="#fff8dc";

            text.style.color="black";
            text.style.fontSize="30px";

            video.style.display="block";

            askReady();
        }

    },1000);
}


//////////////// READY //////////////////

function askReady(){
	text.style.marginTop = "20px";

    changeVideo("v3.mp4");

    text.innerHTML="Are you ready JK❓❔";

    buttons.innerHTML=`
    <button onclick="ready()">Yes</button>
    <button onclick="ready()">Definitely Yes</button>
    `;
}

function ready(){

    buttons.innerHTML="";

    changeVideo("v4.mp4");

    text.innerHTML="Let's play football ⚽";

    setTimeout(letsPlay,5000);
}

function letsPlay(){

    changeVideo("v5.mp4");

    text.innerHTML="Click anywhere on screen to play ☺️";

    document.addEventListener("click", playGoal, { once:true });
}



//////////////// GOAL VIDEO //////////////////

function playGoal(){

    video.onclick=null;

    changeVideo("v6.mp4");

    text.innerHTML="Waaaahhhhhhhh 🤩👏";

    setTimeout(xyz,3050);
}

function xyz(){
	changeVideo("v7.mp4");

	text.innerHTML="GOAL 🎉🥳 You are THE BEST 💯";

    setTimeout(showBirthday,4000);

}

//////////////// BIRTHDAY //////////////////

function showBirthday(){

    video.style.display = "none";
    buttons.innerHTML = "";

    document.body.style.background = "black";

    text.innerHTML = `
    <div id="birthdayText">
            Happy Birthday Jyotiranjan Kunar 💖
    </div>
    <canvas id="fireCanvas"></canvas>
    `;

    text.style.color = "White";
    text.style.fontSize = "60px";

    startFireworks();

    document.addEventListener("click", message34, { once:true });
}

function message34(){

    document.body.onclick = null;

    document.body.style.background = "#fff8dc";

    video.style.display = "block";

    changeVideo("v14.mp4");

    text.style.color = "black";

    text.innerHTML = '<div class="sparkleText"></div>';

    const target = document.querySelector(".sparkleText");

    typeText(
`💌 Once you've finished reading, click anywhere on the screen for the next page 💌`,
    ()=>{
        document.body.addEventListener(
            "click",
            message1,
            { once:true }
        );
    },
    target
    );
}

//////////////// MESSAGE //////////////////

function message1(){

    document.body.onclick = null;

    document.body.style.background = "#fff8dc";

    video.style.display = "block";

    changeVideo("v8.mp4");

    text.style.color = "black";

    text.innerHTML = '<div class="sparkleText"></div>';

    const target = document.querySelector(".sparkleText");

    typeText(
`Thank u for being born and for coming into my life 🙏
My life is brighter because u're in it ✨
Aunty and Uncle ko dher saara pyaar and salute 🫡
Thanks to them, mujhe itna pyaara insaan mila 🥰
Unhe bol do ab vo rest and relax karein 😌
Kyunki ab se lekar future tak main tumhe sambhal lungi 😉
No nazar 🧿🤞`,
    ()=>{
        document.body.addEventListener(
            "click",
            message2,
            { once:true }
        );
    },
    target
    );
}

function message2(){

    document.body.onclick = null;

    document.body.style.background = "#fff8dc";

    video.style.display = "block";

    changeVideo("v9.mp4");

    text.style.color = "black";

    text.innerHTML = '<div class="sparkleText"></div>';

    const target = document.querySelector(".sparkleText");

    typeText(
`Love u Kuchupuchu ❤️ Always ♾️
For every tomorrow of today 🗓️
For every sunrise after this one 🌞
For every good morning and every good night 🌝
For every season that comes and goes 🌧️
For every heartbeat between now and forever 💓
For every day, every month, every year ☺️
For every version of us that the future brings 👴🏻
No nazar 🧿🤞`,
    ()=>{
        document.body.addEventListener(
            "click",
            message3,
            { once:true }
        );
    },
    target
    );
}

function message3(){

    document.body.onclick = null;

    document.body.style.background = "#fff8dc";

    video.style.display = "block";

    changeVideo("v10.mp4");

    text.style.color = "black";

    text.innerHTML = '<div class="sparkleText"></div>';

    const target = document.querySelector(".sparkleText");

    typeText(
`Miss u a lot babyyy 🥺
I really wish ki aaj mai wahan tumhare saath hoti.
I am really jealous of the people jo aaj tumhare saath honge.
Aaahhhhh ye long distance ek din mere maut ka karan banega 😭
I miss hamara roj roj milna.
Tumhari baatein, tumhari smile, tumhari voice, tumhara face, tumhare hugs, tumhare kisses, tumhara touch,tumhari flirting, tumhari shararatein, tumhara mujhe manana.
Ufffffff. Doraemon ke anywhere door ki sakht zarurat h 😭
Bas thodu sa aur wait for me. I have too many hugs and kisses saved up for u 🫂💋
No nazar 🧿🤞`,
    ()=>{
        document.body.addEventListener(
            "click",
            message4,
            { once:true }
        );
    },
    target
    );
}

function message4(){

    document.body.onclick = null;

    document.body.style.background = "#fff8dc";

    video.style.display = "block";

    changeVideo("v11.mp4");

    text.style.color = "black";

    text.innerHTML = '<div class="sparkleText"></div>';

    const target = document.querySelector(".sparkleText");

    typeText(
`You bring colour to my dull and colourless life 🌈
Thank you for being my JYOTI ⭐
You are my lucky star, the best thing that ever happened to me,
and my favorite part of every day.
Thank you for your endless patience,
and for loving me the way you do ❤️
No matter how many stars shine in the sky,
you'll always be the one I look for first 😘
No nazar 🧿🤞`,
    ()=>{
        document.body.addEventListener(
            "click",
            message5,
            { once:true }
        );
    },
    target
    );
}

function message5(){

    document.body.onclick = null;

    document.body.style.background = "#fff8dc";

    video.style.display = "block";

    changeVideo("v12.mp4");

    text.style.color = "black";

    text.innerHTML = '<div class="sparkleText"></div>';

    const target = document.querySelector(".sparkleText");

    typeText(
`Sorry. Not sorry.
But u r stuck with me for the rest of your life.
This birthday, next birthday and future ke saare
tumhare birthdays, I will celebrate with u. U cannot escape.
This birthday, I'm not physically there with you,
But hopefully, for all your future birthdays,
I'll be right there beside you, hugging you and kissing you 🤞
No nazar 🧿 🤞`,
    ()=>{
        document.body.addEventListener(
            "click",
            message6,
            { once:true }
        );
    },
    target
    );
}

function message6(){

    document.body.onclick = null;

    document.body.style.background = "#fff8dc";

    video.style.display = "block";

    changeVideo("v13.mp4");

    text.style.color = "black";

    text.innerHTML = '<div class="sparkleText"></div>';

    const target = document.querySelector(".sparkleText");

    typeText(
`Happy Birthday Baby 🎂 ❤️
May this year bring you lots of happiness, success,
good health, and countless reasons to smile.
Stay healthy and keep shining like the star you are ✨

Love you always 💖
Tumhari Kazy 💋`,
    ()=>{
        document.body.addEventListener(
            "click",
            message7,
            { once:true }
        );
    },
    target
    );
}

//////////////// TYPING EFFECT //////////////////

function typeText(message, callback, target){

    let i = 0;

    function type(){

        if(i < message.length){

            if(message.charAt(i) === "\n"){
                target.innerHTML += "<br>";
            }
            else{
                target.innerHTML += message.charAt(i);
            }

            i++;

            setTimeout(type, 50);

        }
        else{

            if(callback) callback();
        }
    }

    type();
}

function startFireworks(){

    const canvas = document.getElementById("fireCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function createFirework(){

        const x = Math.random() * canvas.width;
        const y = Math.random() * (canvas.height/2);

        const color =
        `hsl(${Math.random()*360},100%,60%)`;

        for(let i=0;i<100;i++){

            particles.push({
                x:x,
                y:y,
                dx:(Math.random()-0.5)*8,
                dy:(Math.random()-0.5)*8,
                life:100,
                color:color
            });
        }
    }

    function animate(){

        ctx.fillStyle="rgba(0,0,0,0.2)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        particles.forEach((p,index)=>{

            p.x += p.dx;
            p.y += p.dy;

            p.life--;

            ctx.beginPath();
            ctx.arc(p.x,p.y,3,0,Math.PI*2);
            ctx.fillStyle=p.color;
            ctx.fill();

            if(p.life<=0){
                particles.splice(index,1);
            }
        });

        requestAnimationFrame(animate);
    }

    setInterval(createFirework,700);

    animate();
}