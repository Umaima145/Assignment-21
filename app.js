//Chapter 21 - 25
//Q1

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome!");

//q2
var favoriteModel = prompt("What is your favorite mobile phone model?");
var lengthOfInput = favoriteModel.length;
document.write("<h2>My favourite phone is: "+favoriteModel +"</h2>" +"<br>","<h2>The length of your favorite mobile phone model is: " + lengthOfInput + "</h2>");


//q3
var word = "Pakistani";
var indexOfN = word.indexOf('n');
document.write("<br>","<h2>The index of 'n' in the word 'Pakistani' is: " + indexOfN + "</h2>");

//q4

var word2 = "Hello World";
var lastIndexofL = word2.lastIndexOf('l');
document.write("<br>","<h2>The last index of 'l' in the word 'Hello World' is: " + lastIndexofL + "</h2>");

//q5
var word3 = "Pakistani";
var charAtIndex3 = word3.charAt(3);
document.write("<br>","<h2>The character at the 3rd index in the word 'Pakistani' is: " + charAtIndex3 + "</h2>");


//q6
var firstName1 = prompt("Enter your first name:");
var lastName1 = prompt("Enter your last name:");
var fullName1 = firstName1.concat(" ", lastName1);
document.write("<br>","<h2>",fullName1,"</h2>")

//q7
var word4 = "Hyderabad";
var replacedWord = word4.replace("Hyder", "Islam");
document.write("<br>","<h2>",word4,"</h2>","<h2> After replacement is: " + replacedWord + "</h2>");


//q8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.split("and").join("&");
document.write("<br>","<h2>The message after replacement is: " + replacedMessage + "</h2>");


//q9
var str = "472";
var number = parseInt(str);
document.write("<br>","<p>Original String: " + str + "<br>Type: " + typeof(str) + "</p>");
document.write("<br>","<p>Converted Number: " + number + "<br>Type: " + typeof(number) + "</p>");


//q10
var userInput5 = prompt("Enter your input:");
var capitalizedInput = userInput5.toUpperCase();
document.write("<br>","<h2>User Input: " + userInput5 + "</h2>");
document.write("<br>","<h2>Capitalized Input: " + capitalizedInput + "</h2>");


//q11
var userInput4 = prompt("Enter your input:");
var titleCaseInput = userInput4.slice(0,1).toUpperCase();
var remainChar = userInput4.slice(1).toLowerCase();
var combineInput = titleCaseInput + remainChar
document.write("<br><h2>userInput4:</h2>", userInput4)
document.write("<br><h2>Title Case:</h2>", combineInput)

//q12
var num2 = 35.36;
var strNum = num2.toString().replace(".", "");
document.write("<br>","<h2>Number: " + num2 + "</h2>");
document.write("<br>","<h2>Result: " + strNum + "</h2>");


//q13
var username = prompt("Enter your username:");
var specialSymbols = ['@', '.', ',', '!'];
var specialSymbolFound = false;
for (var i = 0; i < username.length; i++) {
    if (specialSymbols.includes(username[i])) {
        specialSymbolFound = true;
        break;  
    }
}
if (specialSymbolFound) {
    alert("Please enter a valid username without special symbols [@ . , !]");
}


//q14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search for:").toLowerCase(); 
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput) {
      found = true;
      break; 
    }
}
if (found) {
    document.write("<br>","<h2>", userInput + " is availabe at index:", A.indexOf(userInput),"</h2>" );
  } else {
    document.write("<br>","Sorry," + userInput + "' is not found in the list.");
}

//q15 not attempt
//q16 not attempt


//q17
var userInput = prompt("Enter your input:");
var inputLength = userInput.length;
var lastCharacter = userInput.slice(inputLength - 1);
document.write("<br>","<h2>The last character of your input is: " + lastCharacter + "</h2>");

//q18
var str = "The quick brown fox jumps over the lazy dog";
var lowercaseStr = str.toLowerCase();
var wordToSearch = "the";
var wordsArray = lowercaseStr.split(" ");
var count = 0;
for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === wordToSearch) {
      count++;
    }
}
document.write("<br>","<h2>Number of occurrences of 'the': " + count + "</h2>");


// Home pdf questions
//q1
var allLower = userInput.toLowerCase();

//q2
var x = "Hello World";
x = x.toLowerCase();
document.write("<br>",x)

//q3
var y = "hello world";
y = y.toUpperCase();
document.write("<br>",y)

//q4
var originalString = "Hello World";
var lowerCaseString = originalString.toLowerCase();
document.write("<br>",lowerCaseString); 

//q5
var arr = ["Hello World"];
var lowerCaseString = arr[0].toLowerCase();
document.write("<br>",lowerCaseString); 

//q6
var cityName = "kaRacHi";
var capitalizedCityName = cityName.slice(0).toUpperCase() + cityName.slice(1).toLowerCase();
document.write("<br>",capitalizedCityName); 

//ch 22-25
//q1
var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3);
document.write("<br>",slicedPart);

//q2
var str = "captain";
var numOfCharacters = str.length;
document.write("<br>",numOfCharacters);

//q3
var animal = "elephant";
var seg = animal.slice(2,6);
document.write("<br>",seg)

//q4
var str = "Hello World";
var numOfCharacters = str.length;
document.write("<br>",numOfCharacters);


//q5
var text = "This is a sample text.";
var numChars = text.length;
var slicedText = text.slice(1, -3);
document.write("<br>","Number of characters: " + numChars);
document.write("<br>","Sliced text: " + slicedText);


//q6
var text = "To be or not to be.";
var indx = text.indexOf("be");
document.write("<br>","The value of indx is: " + indx);

//q7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

document.write("<br>","The value of indx is: " + indx);

//q8
var text = "This is a string with go in it and another go";
var indx = text.lastIndexOf("go");
document.write("<br>","The index of the first character of the last instance of 'go': " + indx);

//q9
var str = "example string";
var indexNum = 5; 
if (indexNum >= 0 && indexNum < str.length) {
   
    document.write("<br>","Segment at index " + indexNum + " exists in the string.");
} else {
   
    document.write("<br>","Segment at index " + indexNum + " does not exist in the string.");
}

//q10
var str = "abcde";
var characterAtIndex2 = str.charAt(2);
document.write("<br>","Character at index 2: " + characterAtIndex2);

//q11
var text = "This is a sample text";
var cha = text.charAt(9);
document.write("<br>","The 10th character in the string is: " + cha);

//q12
var str = "example string";
var x = str.charAt(str.length - 1);
document.write("<br>","The last character in the string is: " + x);

//q13
var input = "example string";
var cha = input.charAt(4);
document.write("<br>","The 5th character in the string is: " + cha);