function makeSound(key){
    var time = 0;
    var audio;
    switch(key){
        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case 'j':
            audio = new Audio("sounds/snare.mp3");
            break;
        case 'k':
            audio = new Audio("sounds/crash.mp3");
            break;
        case 'l':
            audio = new Audio("sounds/kick-bass.mp3");
            break;
    }
    time = audio.duration;
    //var button = document.getElementsByClassName(key)[0];
    document.getElementsByClassName(key)[0].classList.add('pressed');
    audio.play();
    setTimeout(() => {document.getElementsByClassName(key)[0].classList.remove('pressed')}, time);
};

document.querySelectorAll(".drum").forEach(element => { element.addEventListener("click", function(){
    var keyPressed = element.innerHTML;
    makeSound(keyPressed);
})});

document.querySelectorAll(".drum").forEach(element => { element.addEventListener("keydown", event => {
    var keyPressed = event.key;
    makeSound(keyPressed);
}
)});