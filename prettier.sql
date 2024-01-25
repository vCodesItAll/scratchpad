
SELECT CONCAT_WS(' ', prefix, first, last, suffix) AS title
FROM names;

/* 
Parameters: 
  - the names table schema
Return: 
  - a single column table containing the full 
  title of the person (concatenate all columns together except id
Example: 
  - ** output table schema **
    title table
    Mr. Justina Macejkovic MD
Concerns: 
  - no edge cases
Explain: 
  - I will return a new table with the desired information
Positive Self Talk: 
  - I have solved similar problems before, so I know I can figure this out :)
  I have the tools in my toolbox.
Translate: 
  - I will translate this into SQL
  */
