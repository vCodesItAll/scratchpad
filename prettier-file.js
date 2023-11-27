function scramble(str1, str2) {
  // Create frequency maps for str1 and str2
  const frequencyMap1 = {};
  const frequencyMap2 = {};

  // Populate frequency map for str1
  for (let char of str1) {
     // Each time char appears increment its frequency value by 1 otherwise leave it as 0
    frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
  }

  // Populate frequency map for str2
  for (let char of str2) {
    // Each time char appears increment its frequency value by 1 otherwise leave it as 0
    frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
  }

  // Check if all characters in str2 can be formed from str1
  for (let char of str2) {
    // If char is not in str1 or its frequency is 0 then return false
    if (!frequencyMap1[char] || frequencyMap1[char] === 0) {
      return false;
    }
    frequencyMap1[char]--;
  }

  return true;
}

// Parameters:
// Two strings, str1 and str2, consisting of lowercase letters (a-z). 
// These strings represent the input for comparison.

// Return:
// The function scramble(str1, str2) returns true if a portion of the 
// characters in str1 can be rearranged to match str2. Otherwise, it returns false.

// Example:
// scramble('rkqodlw', 'world') // Returns True
// scramble('cedewaraaossoqqyt', 'codewars') // Returns True
// scramble('katas', 'steak') // Returns False
// These examples demonstrate the expected outputs of the function for specific input cases.

// Consider Edge Cases:
// Ensure the function handles scenarios where str1 or str2 might be empty strings
// or contain invalid characters (punctuation, digits, etc.). 
// Note that the problem statement specifies that only lowercase letters (a-z) will be present.

// Explain:
// See whether it's possible to rearrange the characters in str1 to form str2. 
// Consider the count of characters in str1 to determine if it's possible to create str2 by rearranging its characters.

// Positive Self Talk:
// This is the last of a beautiful bootcamp full of katas.  I have come so far and have so far yet to go.  
// I am such a smart and kind individual and my creativity can find a solution to this problem and any other problem
// that comes my way.  Thank you, Ember, for your guidance and patience. And for your time and for so much food and 
// for cultivating an inclusive community for the greater good.  Thank you for being a positive role model.

// Translate:
// The function needs to efficiently determine whether the characters in str1 can be rearranged to form str2. 
// It should account for the count and presence of characters in both strings to determine if it's feasible to 
// create str2 by rearranging the characters in str1.