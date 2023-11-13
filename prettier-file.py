def to_camel_case(text):
    # make a list so you can apply string methods
    arr = list(text)
    list_length = len(arr)
    # iterate through each element except the last one
    i = 0
    while i < list_length - 1:
        # if you see an underscore or dash
        if arr[i] in ('_', '-'):
            # make the letter after it capital
            arr[i+1] = arr[i+1].upper()
            # delete the underscore or dash            
            arr.pop(i)
            # decrement the list length to account for the removed element
            list_length -= 1
        else:
            i += 1
    return ''.join(arr)



# /* 
# Parameters: 
#   - a string with dashes and underscores separating words
# Return: 
#   - one camel cased word
# Example: 
#   - "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
# Concerns: 
#   - remember to capitalize the next letter when you take out the 
#   slashes/underscores
# Explain: 
#   - I will write out the word but when I get to a dash or underscore I will
#   take it out and look at the next index and make it uppercase then I will
#   continue writing the letters in lowercase until I hit another dash or 
#   underscore
# Positive Self Talk: 
#   - I have solved similar problems before, so I know I can figure this out :)
#   I have the tools in my toolbox.
# Translate: 
#   - Going to loop through and print string and make conditions that when 
#   there is an underscore or dash I will use the toUpperCase method 
#   to make that index capital then continue printing the rest
#   */