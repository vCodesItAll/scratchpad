function comp(a, b) {
    if (!a || !b) {
        return false;
    }

    const sortedA = a.sort((x, y) => x - y);
    const sortedB = b.sort((x, y) => x - y);

    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] * sortedA[i] !== sortedB[i]) {
            return false;
        }
    }

    return true;
}
