
document.addEventListener("keydown", event => {
    if (event.key == "a") {
        //console.log("The 'A' key is pressed.");
        let audioObj = new Audio("audio/A.mp3");
        audioObj.play();
    }
    else if(event.key == "s") {
        //console.log("The 'S' key is pressed.");
        let audioObj = new Audio("audio/S.mp3");
        audioObj.play();
    }
    else if(event.key == "d") {
        //console.log("The 'D' key is pressed.");
        let audioObj = new Audio("audio/D.mp3");
        audioObj.play();
    }
    else if(event.key == "f") {
        //console.log("The 'F' key is pressed.");
        let audioObj = new Audio("audio/F.mp3");
        audioObj.play();
    }
    else if(event.key == "g") {
        //console.log("The 'G' key is pressed.");
        let audioObj = new Audio("audio/G.mp3");
        audioObj.play();
    }
    else if(event.key == "h") {
        //console.log("The 'H' key is pressed.");
        let audioObj = new Audio("audio/H.mp3");
        audioObj.play();
    }
    else if(event.key == "j") {
        //console.log("The 'J' key is pressed.");
        let audioObj = new Audio("audio/J.mp3");
        audioObj.play();
    }
    else {
        console.log("The key is wrong.");
    }
});

/*
document.getElementById("keyA").addEventListener("click",function() {
    console.log("The 'A' key is pressed.");
}, false);
document.getElementById("keyS").addEventListener("click",function() {
    console.log("The 'S' key is pressed.");
}, false);
document.getElementById("keyD").addEventListener("click",function() {
    console.log("The 'D' key is pressed.");
}, false);
document.getElementById("keyF").addEventListener("click",function() {
    console.log("The 'F' key is pressed.");
}, false);
document.getElementById("keyG").addEventListener("click",function() {
    console.log("The 'G' key is pressed.");
}, false);
document.getElementById("keyH").addEventListener("click",function() {
    console.log("The 'H' key is pressed.");
}, false);
document.getElementById("keyJ").addEventListener("click",function() {
    console.log("The 'J' key is pressed.");
}, false);
document.addEventListener("click",function() {
    console.log("Wrong key was pressed");
}, false);*/
