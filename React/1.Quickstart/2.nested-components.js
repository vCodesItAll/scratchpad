// react components are javascript functions that return markup
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

// now you've nested the MyButton component inside the MyApp component
export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}

// React components start with capital letters i.e. MyButton
// HTML tags start with lowercase letters i.e. button
// export default keywords specify the main component in the file