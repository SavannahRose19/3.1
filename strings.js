function checkPalindrome() 
{
    //gets the value of the input field with the ID 'userInput' from the html and storing it in the variable input
    //let is interchangeable with using var and declares the variable inside the block where they're defined
    let input = document.getElementById('userInput').value;
    
    
    
    // uses regular expression to remove the white space in the string and converts to lowercase
    //the g in this expression stands for global which means to search all throughout the string instead of just removing one space
    // https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    //https://www.w3schools.com/jsref/jsref_regexp_global.asp
     let cleanString = input.replace(/\s/g, "").toLowerCase();
    //creates an empty string to compare the variable cleanedString to 
    let reversedString = "";
    //loops through the entire string backwards and creates a reversed string
    //the start point variable is defined by cleanString and begins from the last character of the string
    //i >=0: defines the condition for the loop to run (i must be great than or equal to 0)
    // i-- decrements the value each time the code block in the loop has been executed
    for (let i = cleanString.length - 1; i >= 0; i--) 
    {
        // concatenates to build a new string in reverse order of the original string
        //reversedString is a variable that holds the string being built inside the loop
        //+=Appends the string on the right to the string on the left
        //[i] is an index access operator that gets the character at position i in the string cleanString
       reversedString += cleanString[i];
    }
        //creates the conditional statement that if cleanString is of equal value and equal type of reversedString
        //proves true
        if (cleanString === reversedString) 
    {
        //document.getElementbyId accesses the element result from the html page
        //.innerText is DOM element that sets the text content of the element
        // ' " ' + input + ' " is a palindrome! creates a string that includes the users input through concatenation
        document.getElementById("result").innerText = '"' + input + ' " is a palindrome!';
    } 
    //proves false
    else 
    {
        document.getElementById("result").innerText = '"' + input + '" is not a palindrome.';
    }
    //keeps the user on the same page upon form submission 
    return false;



}