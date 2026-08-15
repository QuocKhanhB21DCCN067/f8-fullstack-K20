const products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth",
    category: "do-dien-tu",
    price: 350000,
    inStock: true,
  },
  {
    id: 2,
    name: "Áo thun cotton",
    category: "quan-ao",
    price: 150000,
    inStock: true,
  },
  {
    id: 3,
    name: "Sách Lập trình JS căn bản",
    category: "sach",
    price: 120000,
    inStock: false,
  },
  {
    id: 4,
    name: "Bàn phím cơ",
    category: "do-dien-tu",
    price: 890000,
    inStock: true,
  },
  {
    id: 5,
    name: "Quần jean nam",
    category: "quan-ao",
    price: 420000,
    inStock: false,
  },
  {
    id: 6,
    name: "Sách Tư duy nhanh và chậm",
    category: "sach",
    price: 95000,
    inStock: true,
  },
];


const productList = document.querySelector("#product-list")
const searchBox = document.querySelector("#search-box")
const categoryFilter = document.querySelector("#category-filter")
const sortPriceBtn = document.querySelector("#sort-price-btn")
const resultCount = document.querySelector("#result-count")


function renderProducts (products) {

    resultCount.textContent = `Tìm thấy ${products.length} sản phẩm`

    productList.innerHTML = ""

    products.forEach (product => {
        const productItem = document.createElement("div")

        productItem.classList.add("product-item")

        if (!product.inStock) {
            productItem.classList.add("out-of-stock")
        }

        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Danh mục: ${product.category}</p>
            <p>Giá: ${product.price.toLocaleString("vi-VN")}</p>
            <p>${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
        `

        productList.appendChild(productItem)
    })
}

function filterProducts() {
    const keyword = searchBox.value.toLowerCase()
    const category = categoryFilter.value

    const filteredProducts = products.filter(product => {
        const matchName =
            product.name.toLowerCase().includes(keyword)

        const matchCategory =category === "all" || product.category === category

        return matchName && matchCategory
    })

    renderProducts(filteredProducts)
}

let isAscending = true 

sortPriceBtn.addEventListener("click", () => {
    if (isAscending) {
        products.sort((a, b) => {
           return a.price - b.price
        })
        sortPriceBtn.textContent = "Giá: Thấp => Cao"
    } else {
        products.sort((a, b) => {
            return b.price - a.price
        })
        sortPriceBtn.textContent = "Giá: Cao => Thấp"
    }
    renderProducts(products)
    isAscending = !isAscending
})




searchBox.addEventListener("input", filterProducts)
categoryFilter.addEventListener("change", filterProducts)
renderProducts(products)









