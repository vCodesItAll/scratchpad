/* 
Parameters: 
- (positive int or float, guaranteed) start_price_old (Old car price)
- (positive int or float, guaranteed) start_price_new (New car price)
- (positive int or float, guaranteed) saving_per_month 
- (positive float or int, guaranteed) percent_loss_by_month
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