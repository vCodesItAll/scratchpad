// in the 11.using-hooks file each MyButton had its own independent count
// and when each button was clicked only the count for the button clicked
// changed

import { func } from "prop-types";

// however often you'll need components to share data and always update
// together

// to make both MyButton components display the same count and update 
// together, you need to move the state from the individual buttons 
// upwards to the closest component containing all of them

// so that on click, MyApp updates its count state to 1 and passes it down
// to both children

// now when you click either button, the count in MyApp will change,
// which will change both of the counts in MyButton.
// Here's how you can express this in code.

// first, move the state from MyButton to MyApp:
export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
        </div>
    );
}

function MyButton() {
   //...we're moving code from here ...
}

// then pass the state down from MyApp to MyButton, together with the
// shared click handler.  you can pass information to MyButton using
// the jsx curly braces, just like you previously did with built-in
// tags like <img>:
export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}

// what are props? properties are the information you pass down like
// this
// now the MyApp component contains the count state and the handleClick
// event handler, and passes both of them down as props to each of the
// buttons

// finally change MyButton to read the props you have passed from its
// parent component
function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

// when you click the button, the onClick handler fires
// each button's onClick prop was set to the handleClick function
// inside MyApp, so the code inside of it runs.
// that code calls setCount(count + 1), incrementing the count state
// variable
// the new count value is passed as a prop to each button so they all
// show the new value
// this is called "lifting state up"
// by moving state up you've shared it between components
import { useState } from "react";

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}

function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}