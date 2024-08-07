const database = "inventory";
const collection = "products";

use(database);

// used before products list to avoid delete all items in the collection 
// we run it to fix the era of our code not running since products collection already exists
db.products.drop()

db.createCollection(collection);

const productsData = [
  {
    name: "Wireless Mouse",
    price: 29.99,
    category: "Electronics",
    description: "A high-precision wireless mouse with ergonomic design.",
  },
  {
    name: "Bluetooth Headphones",
    price: 89.99,
    category: "Electronics",
    description:
      "Noise-cancelling Bluetooth headphones with long battery life.",
  },
  {
    name: "Office Chair",
    price: 149.99,
    category: "Furniture",
    description:
      "Ergonomic office chair with adjustable height and lumbar support.",
  },
  {
    name: "LED Desk Lamp",
    price: 39.99,
    category: "Home Office",
    description: "Adjustable LED desk lamp with multiple brightness settings.",
  },
  {
    name: "Notebook 100 pages",
    price: 5.99,
    category: "Stationery",
    description:
      "Notebook with 100 lined pages, perfect for notes and sketches.",
  },
  {
    name: "Gel Pens Set",
    price: 12.99,
    category: "Stationery",
    description: "Set of 10 colorful gel pens with smooth writing ink.",
  },
  {
    name: "Office Desk",
    price: 199.99,
    category: "Furniture",
    description:
      "Spacious office desk with storage compartments and a sleek design.",
  },
  {
    name: "Wireless Keyboard",
    price: 49.99,
    category: "Electronics",
    description:
      "Compact wireless keyboard with quiet keys and long battery life.",
  },
];

db.productsData.insertMany(productsData);

// creating and testing an aggragation pipeline
db.products.aggregate([
    {$match: {
          inStock : true
        }}
    {$group: {
        _id: '$category'
        numProducts: {
           $sum : 1
        }
    }}
])

// we can use the following to launch products on vs code
// console.log();
// print();
// printjson();





