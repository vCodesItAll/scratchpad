// this markup syntax is JSX, which is a combination of HTML and JavaScript
// it is stricter than HTML
// you have to close tags like <br /> and <img />
// your component cannot return multiple JSX tags
    // you have to wrap them into a shared parent like <div>...</div>
    // or an empty wrapper like <>...</>

function AboutPage() {
    return (
        <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
        </>
    );
}

// if you have a lot of html you can port it to JSX with an online converter
//      
