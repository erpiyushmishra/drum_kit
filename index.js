// for (var i=0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         if (i===0){
//             var audio = new Audio("./sounds/crash.mp3");
//             audio.play();
//         }
//         if (i===1){
//             var audio = new Audio("./sounds/kick-bass.mp3");
//             audio.play();
//         }
//         if (i===2){
//             var audio = new Audio("./sounds/snare.mp3");
//             audio.play();
//         }
//         if (i===3){
//             var audio = new Audio("./sounds/tom-1.mp3");
//             audio.play();
//         }
//         if (i===4){
//             var audio = new Audio("./sounds/tom-2.mp3");
//             audio.play();
//         }
//         if (i===5){
//             var audio = new Audio("./sounds/tom-3.mp3");
//             audio.play();
//         }
//         if (i===6){
//             var audio = new Audio("./sounds/tom-4.mp3");
//             audio.play();
//         }

//     });
// }




// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     (function(i) {
//         document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//             if (i === 0) {
//                 var audio = new Audio("./sounds/crash.mp3");
//                 audio.play();
//             }
//             if (i === 1) {
//                 var audio = new Audio("./sounds/kick-bass.mp3");
//                 audio.play();
//             }
//             if (i === 2) {
//                 var audio = new Audio("./sounds/snare.mp3");
//                 audio.play();
//             }
//             if (i === 3) {
//                 var audio = new Audio("./sounds/tom-1.mp3");
//                 audio.play();
//             }
//             if (i === 4) {
//                 var audio = new Audio("./sounds/tom-2.mp3");
//                 audio.play();
//             }
//             if (i === 5) {
//                 var audio = new Audio("./sounds/tom-3.mp3");
//                 audio.play();
//             }
//             if (i === 6) {
//                 var audio = new Audio("./sounds/tom-4.mp3");
//                 audio.play();
//             }
//         });
//     })(i);
// }




for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        animation(buttonInnerHTML);
        switch (buttonInnerHTML) {
            case "w":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                
                break;
            case "a":
                var kick_bass = new Audio("./sounds/kick-bass.mp3");
                kick_bass.play();
                
                break;
            case "s":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                
                break;
            case "d":
                var tom_1 = new Audio("./sounds/tom-1.mp3");
                tom_1.play();
                
                break;
            case "j":
                var tom_2 = new Audio("./sounds/tom-2.mp3");
                tom_2.play();
                
                break;
            case "k":
                var tom_3 = new Audio("./sounds/tom-3.mp3");
                tom_3.play();
                
                break;
            case "l":
                var tom_4 = new Audio("./sounds/tom-4.mp3");
                tom_4.play();
                
                break;
    
            default:
                break;
        }
    });

}
// added event listner to all button



document.addEventListener("keypress", function(event){
    var keyPress=event.key;
    animation(keyPress);
    
    switch (keyPress) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            
            break;
        case "a":
            var kick_bass = new Audio("./sounds/kick-bass.mp3");
            kick_bass.play();
            
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            
            break;
        case "d":
            var tom_1 = new Audio("./sounds/tom-1.mp3");
            tom_1.play();
            
            break;
        case "j":
            var tom_2 = new Audio("./sounds/tom-2.mp3");
            tom_2.play();
            
            
            break;
        case "l":
            var tom_4 = new Audio("./sounds/tom-4.mp3");
            tom_4.play();
            
            break;
    
        default:
            break;
    }
    
})

function animation(button){
    document.querySelector("."+button).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+button).classList.remove("pressed")
    }, 100);

}