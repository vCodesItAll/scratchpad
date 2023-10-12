let pad = n =>`0${n}`.slice(-2);

function humanReadable(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
}

P.R.E.C.E.P.T.
Parameters: positive integer (seconds)
Return values: HH:MM:SS
Example arguments and returns: 
    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
Concerns (questions, assumptions, error handling, edge cases, security)
    max time never exceeds 359999(99:59:59)
    need to use slice
Explain your logic in plain language (pseudocode)
    - I am going to calculate how many seconds are in an hour
    - calculate how many minutes are in an hour
    - I will take the total seconds I am given and divide that number by the number of seconds in an hour
    - I will take the remainder of that number and divide it by the number of seconds in a minute
    - I will write the number of hours, minutes, and seconds in the correct format with three sets of two digits
        separated by colons
Positive self talk 
    - I am unstoppable.  I'm about to make 700k a year as an entry level dev.  YEEHAWWWWWWW
Translate your pseudocode solution into JS code
    - I will name the variables to assign seconds in an hour and a minute and the left over seconds and return
      a template literal with the variables in the correct format