function calculateScore(level, kills, boosted) {
    let baseScore  = kills * 10
    let bonusScore = level >= 5 ? baseScore * 0.5 : baseScore * 0.2
    let finalScore = boosted ? (baseScore + bonusScore) * 2 : baseScore + bonusScore

    if (typeof level !== 'number' || typeof kills !== 'number' || level < 0 || kills < 0) {
        return console.log("Dữ liệu không hợp lệ")
    }

    if (typeof boosted !== 'boolean') {
        return 255
    } 

    return finalScore
}

console.log(calculateScore(2, 12, false))