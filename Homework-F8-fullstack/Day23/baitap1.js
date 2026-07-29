// Bài 1
// Hàm 1
function formatBirthday(dateString) {
    const [year, month, day] = dateString.split("-")
    return `${day}/${month}/${year}`
}

console.log(formatBirthday("1995-03-25"));

// Hàm 2
function getAge(birthDateString, currentDateString) {
    const birthYear = new Date (birthDateString)
    const currentYear = new Date (currentDateString)
    let age = currentYear.getFullYear() - birthYear.getFullYear()
    if (birthYear.getMonth() > currentYear.getMonth()) {
        age--
    } else if (birthYear.getMonth() === currentYear.getMonth()) {
        if (birthYear.getDate() === currentYear.getDate()) {
            age--
        }
    }
    return age
}

console.log(getAge("1995-08-01", "2026-07-19"));

// Hàm 3
function getDayOfWeekName(dateString) {
    const date = new Date(dateString)
    const day = date.getDay()

    const weekdays = [
        "Chủ nhật",
        "Thứ hai",
        "Thứ ba",
        "Thứ tư", 
        "Thứ năm", 
        "Thứ sáu", 
        "Thứ bảy"
    ]

    return weekdays[day]
}

console.log(getDayOfWeekName("2026-07-19"));
console.log(getDayOfWeekName("2000-01-01"));

