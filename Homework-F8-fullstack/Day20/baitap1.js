// 1
const user = {
    name: "Nguyễn Văn A" ,
    age: 28,
    introduce: function() {
        console.log(`Tôi là ${this.name}, ${this.age} tuổi`);
    }
}

// 2
const employee = Object.create(user)
employee.wage = 15000000
employee.department = "IT"
employee.getInfor = function () {
    return `${this.name} làm ở phòng ${this.department}, lương ${this.wage}`
}

// 3
const employee1 = Object.create(employee)
employee1.name = "Trần Thị B"
employee1.age = 25
employee1.department = "Marketing"
employee1.wage = 7000000

const employee2 = Object.create(employee)
employee2.name = "Trần Đình B"
employee2.age = 25
employee2.department = "Kỹ thuật"
employee2.wage = 8000000

const employee3 = Object.create(employee)
employee3.name = "Hoàng Văn C"
employee3.age = 25
employee3.department = "Kỹ thuật"
employee3.wage = 9000000

const employee4 = Object.create(employee)
employee4.name = "Bùi Thị D"
employee4.age = 25
employee4.department = "Marketing"
employee4.wage = 7000000

const employee5 = Object.create(employee)
employee5.name = "Lê Thị H"
employee5.age = 25
employee5.department = "Marketing"
employee5.wage = 7000000


// console.log(user.introduce());
// console.log(employee.getInfor());
// console.log(employee1.getInfor());

// 4
const checkOwnProperty = (user, attribute) => {
    return Object.hasOwn(user, attribute)
}
// console.log(checkOwnProperty(employee1, "product"));

// 5
const levelTwoProto = Object.getPrototypeOf(employee1)
const baseProto = Object.getPrototypeOf(employee)
// console.log(Object.getPrototypeOf(employee1) === levelTwoProto);
// console.log(Object.getPrototypeOf(levelTwoProto) === baseProto);

const where = {
    isWhere: function () {
        return ` ${this.name} đang ở ${this.department}`
    }
}
Object.setPrototypeOf(employee1, where)
// console.log(employee1.isWhere());

// 6
// console.log(Object.getOwnPropertyNames(employee1));

// 7
// console.log(Object.getOwnPropertyDescriptor(employee1, "wage"));

// 8
Object.seal(employee1);
employee1.bonus = 1000000;
// console.log(employee1.bonus);
employee1.wage = 20000000;
// console.log(employee1.wage);
// console.log(Object.isSealed(employee1));


// 9
const staff = [
    employee1,
    employee2, 
    employee3,
    employee4, 
    employee5,
]

const grouped = Object.groupBy(staff, employee => employee.department)
// console.log(grouped);

// 10
const staffID = Object.fromEntries([
    ["A001", "Nguyễn Văn A"],
    ["A002", "Trần Văn B"], 
    ["A003", "Nguyễn Thị B"]
])

// console.log(staffID);
// console.log(staffID["A001"]);












