const orders = [
  { id: 1, customer: "An",   product: "Áo thun",     category: "fashion",     amount: 300000, status: "completed" },
  { id: 2, customer: "Bình", product: "iPhone 15",    category: "electronics", amount: 25000000, status: "completed" },
  { id: 3, customer: "An",   product: "Quần jean",    category: "fashion",     amount: 450000, status: "canceled" },
  { id: 4, customer: "Chi",  product: "Tai nghe",     category: "electronics", amount: 1200000, status: "completed" },
  { id: 5, customer: "Bình", product: "Giày",         category: "fashion",     amount: 900000, status: "pending" },
  { id: 6, customer: "An",   product: "Sạc dự phòng", category: "electronics", amount: 350000, status: "completed" },
  { id: 7, customer: "Duy",  product: "Áo khoác",     category: "fashion",     amount: 600000, status: "completed" },
];

// Hàm 1
function getRevenueByCategory(orders) {
    return orders.reduce((acc, order) => {
        if(order.status !== "completed") return acc

        const cat = order.category
        const amount = order.amount

        if (acc[cat] === undefined) {
            acc[cat] = 0
        }

        acc[cat] += amount

        return acc
    }, {})
}

// console.log(getRevenueByCategory(orders));

// Hàm 2 
function getSpendingByCustomer(orders) {
    return orders.reduce((acc, order) => {
        if (order.status !== "completed") return acc

        const nameCustomer = order.customer
        const amount = order.amount

        if (acc[nameCustomer] === undefined) {
            acc[nameCustomer] = 0
        }

        acc[nameCustomer] += amount

        return acc
    }, {})
}

// console.log(getSpendingByCustomer(orders));

// Hàm 3
function getOrderCountByStatus(orders) {
    return orders.reduce((acc, order) => {
        const status = order.status

        if (acc[status] === undefined) {
            acc[status] = 0
        }

        acc[status] ++

        return acc
    }, {})
}

// console.log(getOrderCountByStatus(orders));

// Hàm 4
function getTopCustomer(orders) {
    return orders.reduce((acc, order) => {
        if (order.status === "completed") {
            if (order.amount > acc.maxAmount) {
                acc.name = order.customer
                acc.maxAmount = order.amount
            }
        }

        return acc

    }, {name: "", maxAmount: 0})
}

// console.log(getTopCustomer(orders));

// Hàm 5
function getFullReport(orders) {
    return orders.reduce((acc, order) => {
        const status = order.status
        if (acc.statusCount[status] === undefined) {
            acc.statusCount[status] = 0
        }
        acc.statusCount[status]++

        if (status === "completed") {
            const category = order.category
            const customer = order.customer
            const amount = order.amount 

            // Tổng doanh thu
            acc.totalRevenue += amount

            // Doanh thu theo dnah mục
            if (acc.revenueByCategory[category] === undefined) {
                acc.revenueByCategory[category] = 0
            }

            acc.revenueByCategory[category] += amount

            // Doanh thu theo khách hàng
            if (acc.spendingByCustomer[customer] === undefined) {
                acc.spendingByCustomer[customer] = 0
            }

            acc.spendingByCustomer[customer] += amount
        }

        return acc
    }, {
        revenueByCategory: {},
        spendingByCustomer: {},
        statusCount: {},
        totalRevenue: 0,
    })
}

// console.log(getFullReport(orders));


