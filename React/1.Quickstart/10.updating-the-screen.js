// often you'll want your component to remember some information
// and display it

// for example maybe you want to count the number of times a button
// is clicked

// to do this add state to your component

// first, import useState from react
import { useState } from 'react';

// now you can declare a state variable inside your component
function MyButton() {
    const [count, setCount] = useState(0);
}

// you'll get 2 things from useState: the current state(count) and the 
// function to update it(setCount)

// you can give them any names but the convention is to write
// [something, setSomething]

// the first time the button is displayed, count will be 0
// because you passed 0 to useState().

// when you want to change state, call setCount() and pass the new
// value to it

// clicking this button will increment the counter:
function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

// react will call your component function again
// this time count will be 1.  then it will be 2.  and so on.

// if you render the same component multiple times, each will
// get its own state.  click each button separately:

import { useState } from 'react';

export default function MyApp() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
        </div>
    );
}

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

// notice how each button remembers its own count state and doesn't
// affect other buttons