document.getElementById("yesButton").addEventListener("click", function() {
    alert("Congratulations! 🎉 Your anniversary date is: " + new Date().toLocaleDateString());
});

document.getElementById("noButton").addEventListener("click", function() {
    // Swap the positions of the Yes and No buttons
    let yesButton = document.getElementById("yesButton");
    let noButton = document.getElementById("noButton");

    let tempText = yesButton.innerText;
    yesButton.innerText = noButton.innerText;
    noButton.innerText = tempText;
});
