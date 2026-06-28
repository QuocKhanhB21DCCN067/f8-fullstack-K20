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

    let xuatSac = 0
    for (score of scores) {
        if (score >= 9 && score <= 10) {
            xuatSac++
        }
    }

    let gioi = 0
    for (score of scores) {
        if (score >= 8 && score < 9) {
            gioi++
        }
    }

    let kha = 0
    for (score of scores) {
        if (score >= 6.5 && score < 8) {
            kha++
        }
    }

    let trungBinh = 0
    for (score of scores) {
        if (score >= 5 && score < 6.5) {
            trungBinh++
        }
    }

    let yeu = 0
    for (score of scores) {
        if (score < 5 && score >= 0) {
            yeu++
        }
    }


    return {
        notValid,
        valid, 
        xuatSac, 
        gioi,
        kha, 
        trungBinh,
        yeu
    }
}

const arr = [9, 7, -2, 5.5, 10, 4, 11, 6.5, 8]
const result = analyzeClass(arr)

console.log(`Số điểm không hợp lệ: ${result.notValid}`);
console.log(`Số học sinh hợp lệ: ${result.valid}`);
console.log(`Xuất sắc: ${result.xuatSac}`);
console.log(`Giỏi: ${result.gioi}`);
console.log(`Khá: ${result.kha}`);
console.log(`Trung bình: ${result.trungBinh}`);
console.log(`Yếu: ${result.yeu}`);















