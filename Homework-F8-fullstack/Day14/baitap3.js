function classifyUser(user) {
    let displayName = user.name ? user.name : "Ẩn danh"

    let isAdult = (user.age >= 18) ? true : false

    let hasEmail = (user.email === "") ? true : false 

    let role = (user.role !== null && user.role !== undefined) ? "admin" : "guest"

    let status = "new"
    if (user.score >= 80) {
        status = ("vip")
    } else if (user.score >= 50) {
        status = ("normal")
    }

    let canAccess = (isAdult === true && role !== "guest") ? true : false

    return {
        displayName,
        isAdult,
        hasEmail,
        role,
        status,
        canAccess
    }
}

const user = {
    name: "An",
    age: 17,
    email: "",
    score: 0,
    role: null,
}



console.log(classifyUser({name: "Bình", age: 22, email: "binh@gmail.com", score: 85, role: "admin" }));




