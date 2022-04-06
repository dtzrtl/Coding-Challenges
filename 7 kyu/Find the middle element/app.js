let test = [5, 10, 14]

ans = 1

function gimme (triplet) {

    original = triplet.slice(0)

    sorted = triplet.sort((a, b) => a - b)

    return original.indexOf(sorted[1])
}

console.log(gimme(test),ans) 