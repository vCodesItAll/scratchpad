Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
  //TODO Have fun :)
  let arr = string.split(" "); // turns string into an array with each index is a word

  for (let step = 0; step < arr.length; step++) { 
    if (arr[step].length > 4) {
       arr[step] = arr[step].split("").reverse().join("");
      }
  }
 return arr.join(" ");
 
};

/*
P.R.E.C.E.P.T.
Parameters: a string with multiple words 
Return values: same string with every word with 5+ letters is reversed
Example arguments and returns: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
Concerns (questions, assumptions, error handling, edge cases, security): don't reverse the less than 5 letter words
Explain your logic in plain language (pseudocode):
- I will read the phrase
- i will write down the words in the phrase as long as they are four letters or shorter
- when i get to a letter longer than 4 letters i will write its letters in reverse order
- i will continue until all words are written
Positive self talk: I got Jenna here and we're girl bosses
Translate: see if there's a reverse method.  have an if statement in there.  method to count characters.
  and im sure theres a way to code golf this in one line lets set expectations low
*/

