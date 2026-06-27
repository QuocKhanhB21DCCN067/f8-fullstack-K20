function isPrime(n) {
    for (let i = 1; i<=n; i++) {
        if (n < 2) return false
        if (n === 2) return true
        if (n === 9) return false 
        for (let i = 1; i <= n; i++) {
            if(n % 2 === 0) return false
        }
        return true
    }
}

function isDivisibleBy15 (n) {
    for (let i = 1; i <= n; i++) {
        if (n % 3 === 0 && n % 5 === 0) return true
    }
    return false
}

function triangle (n) {
    for (let i = 1; i <= n; i++) {
        let rows = ""

        for (let j = 1; j <= i; j++) {
            if (isDivisibleBy15(j)) {
                rows += "# "
            } else if (isPrime(j)) {
                rows += "* "
            } else {
                rows += j + " "
            }
        }
        console.log(rows)

        if (i % 2 === 0) {
            console.log("-".repeat(i));
        }
    }
}

// triangle(15)



