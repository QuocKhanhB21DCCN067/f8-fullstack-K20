// Hàm 1: createSlug
function createSlug(text) {
    let lowerCase = text
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(/[^a-zA-Z0-9 -]/g, "")

    return lowerCase
}

// console.log(createSlug("MacBook Pro 2024"));
// console.log(createSlug("Bàn Phím Cơ RGB"));
// console.log(createSlug("iPhone 15 Pro Max!!!"));

// Hàm 2: generateOrderId

function generateOrderId(productName, quantity) {
    let caseProduct = productName.slice(0, 3).toUpperCase()
    return `ORD-${caseProduct}-${quantity}-${productName.length}`
}

// console.log(generateOrderId("MacBook Pro", 2));
// console.log(generateOrderId("iPhone 15", 5));
// console.log(generateOrderId("Bàn phím cơ", 1));

// Hàm 3: formatPrice(price, currency)

function formatPrice(price, currency) {
    let valuePrice = currency
    if (currency === "USD") {
        return `$${price}`
    } else {
        return `${price}đ`
    }
}

// console.log(formatPrice(2000000, "VND"));
// console.log(formatPrice(2000, "USD"));
// console.log(formatPrice(500000));

// Hàm 4: buildProductUrl(baseUrl, product)

function buildProductUrl(baseUrl, product) {
    const inforProduct = {
        name: product.name, 
        id: product.id, 
        category: product.category
    }

    inforProduct.name = product.name.replaceAll(" ", "-").toLowerCase()

    return `${baseUrl}/${inforProduct.category}/${inforProduct.name}?id=${inforProduct.id}`
}

// console.log(buildProductUrl("https://shop.vn", { name: "MacBook Pro 2024", id: 101, category: "laptop" }));
// console.log(buildProductUrl("https://shop.vn", { name: "iPhone 15", id: 55, category: "phone" }));






