// Hàm 1: getWords(text)
function getWords(text) {
    return text.split(" ")
}
// console.log(getWords("javascript là ngôn ngữ lập trình phổ biến javascript chạy trên trình duyệt và javascript cũng chạy trên server"));

// Hàm 2: countWord(text, word)
function countWord(text, word) {
    return text.split(word).length-1
}

// console.log(countWord("javascript là ngôn ngữ lập trình phổ biến javascript chạy trên trình duyệt và javascript cũng chạy trên server", "chạy"));


// Hàm 3: getUniqueWords(text)

function getUniqueWords(text) {
    const wordRepeat = text.filter((text, index) => {
        return word.indexOf(text) === index
    })
}

// console.log(getUniqueWords("javascript là ngôn ngữ lập trình phổ biến javascript chạy trên trình duyệt và javascript cũng chạy trên server"));
