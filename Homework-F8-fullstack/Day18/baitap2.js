// Hàm 1
const createCalculator = function (a, b) {
    return {
        add:(a, b) => a + b,
        subtract:(a, b) => a - b,
        multiply:(a, b) => a * b,
        divide:(a, b) => a / b,
        divide:(a, b) => b === 0 ? "Lỗi chia hết cho 0" : a / b
    }
}

const calculator = createCalculator()

// console.log(calculator.add(2, 4));
// console.log(calculator.subtract(10, 5));
// console.log(calculator.multiply(2, 5));
// console.log(calculator.divide(10, 5));
// console.log(calculator.divide(10, 0));

// Hàm 2
function average(...numbers) {
    return numbers.reduce((sum, curr) => {
        return sum + curr
    }, 0) / numbers.length
}

// console.log(average(1, 2, 3, 4, 5));
// console.log(average(5));
// console.log(average(10, 20, 30));

// Hàm 3
function applyDiscount(price, discountPercent = 10) {
    if (typeof price !== 'number' || Number.isNaN(price) ) return "Giá không hợp lệ"
    const discountAmount = (price * discountPercent) / 100
    const totalPrice = price - discountAmount
    return totalPrice
}

// console.log(applyDiscount(100000));
// console.log(applyDiscount(100000, 20));
// console.log(applyDiscount(100000, 0));
// console.log(applyDiscount("abc", 10));
// console.log(applyDiscount(NaN, 10));

// Hàm 4
function safeCalculate(operation, ...numbers) {

    for (const num of numbers) {
        if (typeof num !== 'number' || Number.isNaN(num)) return "Kết quả không hợp lệ"
    }

    if (operation === "add") return numbers.reduce((sum, curr) =>  sum + curr, 0)
    else if (operation === "subtract") return numbers.reduce((sum, num) =>  sum - nu)
    else if (operation === "multiply") return numbers.reduce((sum, num) => sum * num, 1)
    else if (operation === "average") return numbers.reduce((sum, num) => sum + num, 0) / numbers.length
    else return "Phép tính không hợp lệ"
}

// console.log(safeCalculate("add", 1, 2, 3));
// console.log(safeCalculate("multiply", 2, 3, 4));
// console.log(safeCalculate("average", 10, 20));
// console.log(safeCalculate("divide", 10, 2));
// console.log(safeCalculate("add", 1, "abc", 3));




















