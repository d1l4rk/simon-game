const buttons = document.querySelectorAll("button");

const randomPatron = () => { return Math.floor(Math.random()*4) + 1}

const buttonsLightin = (nodeList) =>{
    nodeList.classList.toggle("sombra");
    setTimeout(() =>{
        nodeList.classList.toggle("sombra");
    },100)
}

const startTheGame = () =>{
for(let i = 0; i<buttons.length; i++){
    buttons[i].style.cursor ="pointer";
    let className = buttons[i].classList.item(1);

    console.log(className);
    buttons[i].addEventListener("click", () =>{
        switchSound(className);
        buttonsLightin(buttons[i]);
    })

}
}


const switchSound = (key) =>{
    let sound;
    switch (key) {      
        case "green":
            sound = new Audio("./assets/mixkit-explainer-video-game-alert-sweep-236.wav");
            
            break;
        case "red":
            sound = new Audio("./assets/mixkit-quick-jump-arcade-game-239.wav");

            break;
        case "yellow":
            sound = new Audio("./assets/mixkit-unlock-game-notification-253.wav");

            break;
        case "blue":
            sound = new Audio("./assets/mixkit-video-game-retro-click-237.wav");

            break;
        default:
            console.log("error");
            break;
    }
    sound.play();
}

let fired = false;

document.addEventListener("keydown", (e) =>{
    if(e.key == "Enter" && fired == false){
        fired = true;
        startTheGame();
    }
    
});

const forProbe = (j) =>{
    for(let i = 1; i <= j; i++){
        setTimeout(() =>{
            let random = robotThink(randomPatron());
            switchSound(random);
        },i * 1000 );
    }
}


const logicGame = () =>{
    for(let i = 1; i < 10; i++){


        setTimeout( () =>{
            forProbe(i);                
        },i * 1000);




            
            // switchSound(random);
        


    }
}

const robotThink = (randomPatron) =>{
    switch(randomPatron){
        case 1:
            const green = document.querySelector(".green");
            buttonsLightin(green);
            randomPatron = "green";
            
            return randomPatron;
        case 2:
            const red = document.querySelector(".red");
            buttonsLightin(red);
            randomPatron = "red";
            return randomPatron;
        case 3:
            const yellow = document.querySelector(".yellow");
            buttonsLightin(yellow);
            randomPatron = "yellow";
            return randomPatron;
        case 4: 
            const blue = document.querySelector(".blue");
            buttonsLightin(blue);
            randomPatron = "blue";
            return randomPatron;
        default:
            console.log("error");
        break;
    }
}

