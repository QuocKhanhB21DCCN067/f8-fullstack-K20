const calculate = function(operation, ...numbers) {
    // 1. Kiểm tra nếu không có số nào được truyền vào
    if (numbers.length === 0) return "Không có số để tính";

    // 2. Kiểm tra dữ liệu hợp lệ
    for (const num of numbers) {
        if (typeof num !== 'number' || Number.isNaN(num)) {
            return "Giá không hợp lệ";
        }
    }

    // 3. Thực hiện phép tính bằng if-else
    if (operation === "add") {
        return numbers.reduce((total, num) => total + num, 0);
    } 
    else if (operation === "subtract") {
        return numbers.reduce((total, num) => total - num);
    } 
    else if (operation === "multiply") {
        return numbers.reduce((total, num) => total * num, 1);
    } 
    else if (operation === "average") {
        const sum = numbers.reduce((total, num) => total + num, 0);
        return sum / numbers.length;
    } 
    else {
        // Trường hợp tên phép tính không khớp với cái nào ở trên
        return "Phép tính không hợp lệ";
    }
};

// --- Kiểm tra kết quả vẫn đúng chuẩn ---
console.log(calculate("add", 10, 5));       // 15
console.log(calculate("average", 4, 6, 8)); // 6
console.log(calculate("magic", 1, 2));      // "Phép tính không hợp lệ"