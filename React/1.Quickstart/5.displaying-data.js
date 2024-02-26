// jsx lets you put markup into your javascript
// curly braces let you escape back into javascript so you can embed some
    // variable from your code and display it to the user

// this displays user.name
return (
    <h1>
        {user.name}
    </h1>
);

// you can also escape into javascript from jsx attributes but you have to
    // use curly braces instead of quotes

return (
    <img
        className="avatar" // passes the avatar string as the css class
        src={user.imageUrl} // reads the javascript variable value then
                                // passes it as the src attribute
    />
);