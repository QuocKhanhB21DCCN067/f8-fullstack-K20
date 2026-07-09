const examResults = [
  { student: "An", scores: [8.5, 7, 9, 6.5] },
  { student: "Bình", scores: [10, 9.5, 8, 10] },
  { student: "Chi", scores: [5, 4.5, 6, 5.5] },
  { student: "Duy", scores: [7, 7, 7, 7] },
];

// Hàm 1 
function getAverage(scores) {
    const scoreAverage = scores
    .reduce((sum, curr) => {
       return sum + curr
    }, 0) / scores.length

    return scoreAverage 

}

// console.log(getAverage([8.5, 7, 9, 6.5]));

// Hàm 2
function classifyStudent(average) {

    const totalAverage = getAverage([average]) // số => mảng
    const finalRank = parseFloat(totalAverage) // chuỗi => số

    if (finalRank >= 9) return "Xuất sắc"
    else if (finalRank >= 8) return "Giỏi"
    else if (finalRank >= 6.5) return "Trung bình"
    return "Yếu"
}

// console.log(classifyStudent(4));

// Hàm 3
function isValidScore(score) {
    if (score >= 0 && score <= 10) return true
    else return false 
}

// console.log(isValidScore(8.5))
// console.log(isValidScore(-1))
// console.log(isValidScore(11))
// console.log(isValidScore(Infinity))
// console.log(isValidScore(NaN));

// Hàm 4
function getReportCard(examResults) {
    return examResults
    .map(item => {
        const average = getAverage(item.scores)
        const classification = classifyStudent(average)
        
        return {
            student: item.student,
            average: parseFloat(average.toFixed(1)),
            classification: classification
        }
    })
}

// console.log(getReportCard(examResults));

