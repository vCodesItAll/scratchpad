// in react there is no special syntax for writing conditions
// it is similar to javascript conditions
// you can use an if statement to conditionally include JSX

let content;
if (isLoggedIn) {
    content = <AdminPanel />; // react components are capitalized
} else {
    content = <LoginForm />; // react components are capitalized
}
return (
    <div>
        {content}
    </div>
);

// you can code golf the above with the conditional ? operator
// unlike if, it works inside JSX

<div>
    {isLoggedIn ? (
        <AdminPanel />
    ) : (
        <LoginForm />
    )}
</div>

// if you don't need the else branch you can code golf EVEN MORE
// you can use the logical && syntax

<div>
    {isLoggedIn && <AdminPanel />}
</div>

// all of these approaches also work for conditionally specifying attributes
// if you don't know some of this js syntax you can start with if...else