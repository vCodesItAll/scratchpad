// example of escaping into javascript within jsx attributes

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{ 
                    width:user.imageSize,
                    height:user.imageSize
                }}
            />
        </>
    );
}

// style={{}} is not special syntax but a regular {} object inside the 
    // style ={ } jsx curly braces.
// you can use the style attribute when your styles depend on js variables