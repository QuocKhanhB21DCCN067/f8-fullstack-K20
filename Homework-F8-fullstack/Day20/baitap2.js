// câu 1
const config = {
    mucPhuPhi: 0.1
}
Object.freeze(config)
config.mucPhuPhi = "0.6"
// console.log(config.mucPhuPhi);

// câu 2

let nextID = 1

class cart {
    constructor(cartName, config) {
        this.cartName = cartName;
        this.config = config
        this.items = []
        this._discount = 0

        Object.defineProperty(this, "id", {
            value: nextID++,
            writable: false,
            enumerable: false, 
            configurable: false
        })
    }

    


    addItem(name, price, quantity) {
        const item = {
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        }
        this.items.push(item)
    }

    set discountPercent(value) {
        if (value < 0 || value > 100) {
            throw new Error ("Giá trị không hợp lệ")
        }
        this._discount = value
    }

    get totalAmount() {
        const itemsTotal = this.items.reduce((sum, item) => sum + item.totalPrice, 0)
        const total = itemsTotal * (1 + this.config.mucPhuPhi)

        const discount = total * (1 - this._discount / 100)

        return discount
    }

}

const cartOwner = new cart("Giỏ hàng của An", config)
cartOwner.addItem("Bàn phím", 500000, 2)
cartOwner.addItem("Chuột", 200000, 1)
console.log(cartOwner.totalAmount);

cartOwner.discountPercent = 10

console.log(cartOwner.totalAmount);

// Câu 3
try {
    cartOwner.discountPercent = 150
} catch (e) {
    console.log(e.message);
}

function logSummary () {
    console.log(`Tên: ${this.cartName}`);
    console.log(`Tổng: ${this.totalAmount}`);
    
    
}

setTimeout(logSummary.bind(cartOwner), 100)

// Câu 4
console.log(Object.keys(cartOwner));

cartOwner.id = "hack123";
console.log(cartOwner.id);

// Câu 5
const obj1 = {
    name: "An",
    age: 12,
    city: "Hà Nội"
}

const obj2 = {
    job: "IT",
    company: "VNPT"
}

Object.assign(obj2, obj1)

console.log(obj1);
console.log(obj2);




