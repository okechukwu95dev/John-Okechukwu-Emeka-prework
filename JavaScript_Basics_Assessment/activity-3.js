

//loop protect logic for Jsbin(which I used for practice).can be commented out
"// noprotect"

var student = ['jane', 'john', 'jim'];


//Create a loop that will prompt the user for three more names.
//After every user input, store the new name into the array.
var i
for (i = 0; i < 3; i++){
    student.push(prompt('please input student names'));
}


//Create a new loop that will iterate through the array and console log each element of the array.
for (i=0; i<student.length; i++){
    console.log (student[i]);
}
