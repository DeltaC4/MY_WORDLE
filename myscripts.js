const words = ["WATER"];
let enterCount = 0;

function run() {

    document.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            // Your code to handle the Enter keypress
            enterCount++;
            console.log("EnterCount: " + enterCount);
        }
    });  

    const guess = document.getElementById("myInput").value.toUpperCase();
    document.getElementById("1").innerHTML = guess[0].charAt(0);
    document.getElementById("2").innerHTML = guess[1].charAt(0);
    document.getElementById("3").innerHTML = guess[2].charAt(0);
    document.getElementById("4").innerHTML = guess[3].charAt(0);
    document.getElementById("5").innerHTML = guess[4].charAt(0);
    document.getElementById("1","2","3","4","5").style.backgroundColor = "lightgrey";
    
    //check for contains
    if (words[0].includes(guess.charAt(0))) {
        document.getElementById("1").style.backgroundColor = "yellow";
    } else {
        document.getElementById("1").style.backgroundColor = "lightgrey";
    }
    if (words[0].includes(guess.charAt(1))) {
        document.getElementById("2").style.backgroundColor = "yellow";
    } else {
        document.getElementById("2").style.backgroundColor = "lightgrey";
    }
    if (words[0].includes(guess.charAt(2))) {
        document.getElementById("3").style.backgroundColor = "yellow";
    } else {
        document.getElementById("3").style.backgroundColor = "lightgrey";
    }
    if (words[0].includes(guess.charAt(3))) {
        document.getElementById("4").style.backgroundColor = "yellow";
    } else {
        document.getElementById("4").style.backgroundColor = "lightgrey";
    }
    if (words[0].includes(guess.charAt(4))) {
        document.getElementById("5").style.backgroundColor = "yellow";
    } else {
        document.getElementById("5").style.backgroundColor = "lightgrey";
    }

    //check if they match
    if (words[0].charAt(0) == (guess.charAt(0))) {
        document.getElementById("1").style.backgroundColor = "green";
    }
    if (words[0].charAt(1) == (guess.charAt(1))) {
        document.getElementById("2").style.backgroundColor = "green";
    }
    if (words[0].charAt(2) == (guess.charAt(2))) {
        document.getElementById("3").style.backgroundColor = "green";
    }
    if (words[0].charAt(3) == (guess.charAt(3))) {
        document.getElementById("4").style.backgroundColor = "green";
    }
    if (words[0].charAt(4) == (guess.charAt(4))) {
        document.getElementById("5").style.backgroundColor = "green";
    }
}