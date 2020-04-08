//Grab a user input using a prompt() and store it in a variable.
var name = prompt('please provide input');

//Add a conditional statement where if the variable's length is greater than 4, we alert the user that their name is greater than four characters.
if (name.length > 4){
    alert ('Your input is greater than four characters');
}

else if (name.length === 4){
    alert ('Your name is four characters long');

}
//Otherwise, alert that their name is less than four characters.
else  {
    alert ('Your input is less than four characters');
}