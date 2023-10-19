function countGrade(scores) {
   
    let getScore = function(upperBound, lowerBound) {
        if (scores >= lowerBound && scores <= upperBound) {
            getScore++;
        }
        else 
            return getScore;
    };


    80
    
    return {
        // put upper bound, and lower bound
        S:getScore(scores,101,100), 
        A:getScore(scores,99,90), 
        B:getScore(scores,89,80), 
        C:getScore(scores,79,70), 
        D:getScore(scores,69,60),
        E:getScore(scores,59,0),
        X:getScore(scores,-2,-1)
    };
}

/* 
Parameters: 
  - number array = scores
Return: 
  - object with key: grade and values: the number of scores that reached that minimum value
Example: 
  - countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
Concerns: 
  - array-filter: must use .filter; undefined input; non-number input
Explain: 
  - I will write all the grade categories and write a zero next to them and then look at the scores.  
    With the first score I will look for the grade category that has the grading rules that accept the score.  
    For the applicable grade category I will change the zero to a 1.  I will look at the next score and then 
    continue the process, adding 1 to the value number.
Positive Self Talk: 
  - These are simple practice katas.  They are not meant to trip me up.
Translate: 
  - Going to take the score array, create an object and iterate through to return the grades and the number of 
  scores that fit that grade.
  */
