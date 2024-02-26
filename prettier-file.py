def comp(a, b):
    # your code
        if a is None or b is None or len(a) != len(b):
            return False
        
        a.sort()
        b.sort()
        
        for x in a:
            if x**2 not in b:
                return False
        
        return True

# Parameters:
# Two arrays, 'a' and 'b', containing elements to be compared.

# Return:
# A function comp(a, b)

# Example:
# Valid arrays:
# a = [121, 144, 19, 161, 19, 144, 19, 11]  
# b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

# Consider Edge Cases:
# Handle scenarios where arrays 'a' or 'b' might be empty ([] or {}), or contain nil, null, None, or nothing in specific languages. Ensure that if 'a' or 'b' are undefined, the function should return false.

# Explain:

# Compare the arrays 'a' and 'b' to determine if 'b' contains elements that are 
# corresponding squares of elements in 'a'. 

# Positive Self Talk:
# I am woman.  Hear me roar.

# Translate:
# The function should iterate through both arrays, square each element in 'a', and compare if the 
# squared elements exist in 'b'. If any element in 'b' doesn't match the squared elements in 'a', 
# return false.
