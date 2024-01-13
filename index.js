
function double(array) {
    return array.map(value => value * 2);
}

var someNumbers = [1,2,10,57];
double(someNumbers); // should return [2,4,20,114]
