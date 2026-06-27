function classifyTriangle(a, b, c) {
    if (a,b,c <= 0 ) {
        console.log("Cạnh không hợp lệ");
    } else if (a + b < c || a + c < b || b + c < a) {
        console.log("Không tạo thành tam giác");
    } else if (a === b && b === c) {
        console.log("Tam giác đều");
    } else if (a === b || a === c || b === c) {
        console.log("Tam giác cân");
    } else if ((c > a && c > b) && (a*a + b*b === c*c)) {
        console.log("Tam giác vuông");
    } else {
        console.log("Tam giác thường");
    }
}

// console.log(classifyTriangle(2, 2, 2));
