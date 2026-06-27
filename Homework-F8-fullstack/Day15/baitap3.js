function analyzeClass(scores) {
    let notValid = 0
    let valid = 0

    for (let score of scores) {
        if (score < 0 || score > 10) {
            notValid++
        } else {
            valid++
        }
    }


    return {
        notValid,
        valid
    }
}

const arr = [9, 7, -2, 5.5, 10, 4, 11, 6.5, 8]
const result = analyzeClass(arr)

console.log(`Số điểm không hợp lệ: ${result.notValid}`);
console.log(`Số học sinh hợp lệ: ${result.valid}`);


















