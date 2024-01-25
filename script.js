function toCamelCase(str){
    let arr = [];
    str.split('').forEach((char,i) => {
        if (char === '_' || char === '-') {
            arr.push(str[i+1].toUpperCase());
            arr.splice(i+1,1);
            
        } else {
            arr.push(char);
        }
    });
    return arr.join('');
}

toCamelCase("str");



/* 
Parameters: 
  - a string with dashes and underscores separating words
Return: 
  - one camel cased word
Example: 
  - "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
Concerns: 
  - remember to capitalize the next letter when you take out the 
  slashes/underscores
Explain: 
  - I will write out the word but when I get to a dash or underscore I will
  take it out and look at the next index and make it uppercase then I will
  continue writing the letters in lowercase until I hit another dash or 
  underscore
Positive Self Talk: 
  - I have solved similar problems before, so I know I can figure this out :)
  I have the tools in my toolbox.
Translate: 
  - Going to loop through and print string and make conditions that when 
  there is an underscore or dash I will use the toUpperCase method 
  to make that index capital then continue printing the rest
  */