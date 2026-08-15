const submitBtnEle = document.querySelector("#submit-btn")
const formEle = document.querySelector("#register-form")
const userName = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")

const validateUserName = (userName) => {
    let isValid = true;
    if (userName.length < 4) isValid = false
    else {
        const regex = /^[A-Za-z0-9_]+$/
        isValid = regex.test(userName);
    }
    
    const userNameErr = document.querySelector("#username-error")
    if (!isValid) {
        userNameErr.textContent = "Lỗi";
    } else {
        userNameErr.textContent = "";
    }
    return isValid
}


function validateEmail (email) {
    let isValid = true
    if (email === "") {
        isValid = false
    } else {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        isValid = regex.test(email)
    }

    const emailErr = document.querySelector("#email-error")
    if (!isValid) {
        emailErr.textContent = "Email không hợp lệ"
    } else {
        emailErr.textContent =  ""
    }
    return isValid
}

function validatePassword (password) {
    let isValid = true
    if (password.length < 8) {
        isValid = false
    } 

    let hasNumber = false 
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "0" && password[i] <= "9") {
            hasNumber = true
            break
        }
    }

    if(!hasNumber) {
        isValid = false
    }

    const passwordErr = document.querySelector("#password-error")
    if (!isValid) {
        passwordErr.textContent = "Chưa đủ điều kiện vui lòng nhập lại"
    } else {
        passwordErr.textContent = ""
    }

    return isValid
}

function validateConfirmPassword (password, confirmPassword) {
    let isValid = true 

    if (password !== confirmPassword) {
        isValid = false
    }

    const confirmPasswordErr = document.querySelector("#confirm-password-error") 

    if (!isValid) {
        confirmPasswordErr.textContent = "Mật khẩu không khớp"
    } else {
        confirmPasswordErr.textContent = ""
    }

    return isValid
}

document.addEventListener("input", (event) => {
    if (event.target.closest("#username, #email, #password, #confirm-password")) {

        if (
            validateUserName(userName.value) &&
            validateEmail(email.value) &&
            validatePassword(password.value) &&
            validateConfirmPassword(password.value, confirmPassword.value)
        ) {
            submitBtnEle.disabled = false;
        } else {
            submitBtnEle.disabled = true;
        }
    }
})


formEle.addEventListener("submit", (event) => {
    event.preventDefault()
    const isUserName = validateUserName(userName.value)
    const isEmail = validateEmail(email.value)
    const isPassword = validatePassword(password.value)
    const isConfirmPassword = validateConfirmPassword (password.value, confirmPassword.value)

    if (isUserName && isEmail && isPassword && isConfirmPassword) {
        const successMessage = document.querySelector("#success-message")
        successMessage.textContent = "Bạn đã đăng kí thành công"
    }
})
