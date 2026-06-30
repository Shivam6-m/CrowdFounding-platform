// Total Donation Amount
let totalDonation = 0;

// Login Button
const loginBtn = document.querySelector("nav button");
   
loginBtn.addEventListener("click", function () {
    let username = prompt("Enter your username:");

    if (username === null || username.trim() === "") {
        alert("Login cancelled.");
    } else {
        alert("Welcome " + username + "!");
        loginBtn.innerText = "Logout";
    }
});

// Start Campaign Button
const startBtn = document.querySelector(".btn");

startBtn.addEventListener("click", function () {

    let field = prompt(
        "Enter your campaign field:\n\nExamples:\nMedical\nEducation\nStartup\nAnimal Welfare\nEnvironment"
    );

    if (field === null || field.trim() === "") {
        alert("No field entered.");
        return;
    }

    document.querySelector(".hero h2").innerText =
        "Selected Field: " + field;

    alert("Campaign for '" + field + "' is ready!");
});

// Donate Buttons
const donateButtons = document.querySelectorAll(".card button");

donateButtons.forEach(function(button){

    button.addEventListener("click", function(){

        let amount = prompt("Enter donation amount (₹):");

        if(amount === null){
            return;
        }

        amount = Number(amount);

        if(isNaN(amount) || amount <= 0){
            alert("Please enter a valid amount.");
            return;
        }

        totalDonation += amount;

        alert(
            "Thank you for donating ₹" +
            amount +
            "\n\nTotal Donations: ₹" +
            totalDonation
        );
    });

});

// Footer Click
document.querySelector("footer").addEventListener("click", function(){
    alert("Thank you for visiting CrowdFund!");
});