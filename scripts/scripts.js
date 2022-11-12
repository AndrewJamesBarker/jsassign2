
// Variables


// Book names

var book1 = "Barney's Version"
var book2 = "The Glass Bead Game"
var book3 = "Nueromancer"
var book4 = "1Q84"
var book5 = "Dune"
var book6 = "Gunslinger"
var book7 = "The Dawn Of Everything"
var book8 = "Good Omens"
var book9 = "The Apprenticeship Of Duddy Kravitz"
var book10 = "Ender's Game"

// Top Ten Array

var topTenBooks = [book1,book2,book3,book4,book5,book6,book7,book8,book9,book10]

// Logic

//I struggled with the bunos question until recieving Seans feedback on implementing a 'flag variable'. In order to get the array index to line up with the userInput number i minus'd one inside the arrays index... I dont know if this is a legit way to do it, as i discovered it by trial and error (at first i was trying to 'plus one' and discovered it made things worse.)//

var valid = false

function userValid() {
    userInput = prompt("Which top 10 book would you like?","Pick a number: 1-10");
    if (userInput > 0 && userInput <= 10) {
        userInput = parseInt(userInput);
        alert("Number " + userInput + " on the list is: " + topTenBooks[(userInput - 1)]);
        valid = true
    } else {
        alert("Please enter a number between 1 and 10!")
}
}

userValid()

while (valid === false){
    userValid();
}
    
for (let i = 0; i < topTenBooks.length; i++) {
    console.log("Book " + (i + 1) + ": " + topTenBooks[i]) 
}


