for (let i = 1; i < 102; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0 ) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}


//with ternary operators

for (let i = 1; i < 102; i++) {
    console.log((i%3 === 0 && i%5 === 0) ? "fizzbuzz" : (i % 3 === 0) ? "fizz" : (i % 5 === 0 ) ? "buzz" : i)
}