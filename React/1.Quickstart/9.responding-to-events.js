// you can respond to events by declaring event handler functions inside
// your components

function MyButton() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

// onClick={handleClick} is an example of a prop
// onClick={handleClick} has no parentheses at the end
// do not call the event handler function - you only need to pass it down
// react will call your event handler when the user clicks the button