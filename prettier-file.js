function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
    const result = array.map((num) => num * 2);
    return result;
}

/*
 params: an array of integers
    return: js - an array with every integer in the same index but doubled in value
    example: var someNumbers = [1,2,10,57];
            double(someNumbers); // should return [2,4,20,114]
            
    concerns: I am aging. I am weak.
    explain:
        I would look at the first number
        I would multiply it by 2 and write that number in the OG number's place
        I would do this down the line until all given numbers have been changed
    positive self talk: I am experienced and I still got it.  I am a firecracker. I am all-seeing and all powerful
    translate: use the map function on the array object
*/