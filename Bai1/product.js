// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
    new Product(1, "iPhone 15", 25000000, 10, "Electronics", true),
    new Product(2, "AirPods Pro", 5000000, 5, "Electronics", true),
    new Product(3, "Sneaker Nike", 3000000, 0, "Accessories", false),
    new Product(4, "T-shirt Uniqlo", 500000, 20, "Clothing", true),
    new Product(5, "Smartwatch", 8000000, 8, "Electronics", true),
    new Product(6, "Backpack", 1500000, 15, "Accessories", true)
];

// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm
const namePriceArray = products.map(product => ({
    name: product.name,
    price: product.price
}));

console.log("Câu 3 - Mảng chỉ chứa name và price:");
console.log(namePriceArray);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const inStockProducts = products.filter(product => product.quantity > 0);
console.log("\nCâu 4 - Sản phẩm còn hàng:");
inStockProducts.forEach(p => console.log(`- ${p.name} (SL: ${p.quantity})`));

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensiveProduct = products.some(product => product.price > 30000000);
console.log(`\nCâu 5 - Có ít nhất 1 sản phẩm > 30.000.000? ${hasExpensiveProduct}`);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
const allAccessoriesAvailable = products
    .filter(product => product.category === "Accessories")
    .every(product => product.isAvailable);
console.log(`Câu 6 - Tất cả Accessories đều đang bán? ${allAccessoriesAvailable}`);

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
const totalInventoryValue = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
console.log(`\nCâu 7 - Tổng giá trị kho hàng: ${totalInventoryValue.toLocaleString()} VND`);

// Câu 8: Dùng for...of duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("\nCâu 8 - Duyệt bằng for...of:");
for (const product of products) {
    const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${product.name} - ${product.category} - ${status}`);
}

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
console.log("\nCâu 9 - Duyệt bằng for...in:");
for (const product of products) {
    console.log(`\nThông tin sản phẩm: ${product.name}`);
    for (const key in product) {
        if (product.hasOwnProperty(key)) {
            console.log(`  ${key}: ${product[key]}`);
        }
    }
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const availableAndInStock = products
    .filter(product => product.isAvailable && product.quantity > 0)
    .map(product => product.name);
console.log(`\nCâu 10 - Sản phẩm đang bán và còn hàng: ${availableAndInStock.join(", ")}`);