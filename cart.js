const clothingItems = [
  { name: 'Blue Jeans', price: 59.99, quantity: 5 },
  { name: 'Red T-shirt', price: 19.99, quantity: 10 },
  { name: 'Black Hoodie', price: 39.99, quantity: 8 },
  { name: 'White Sneakers', price: 79.99, quantity: 4 },
  { name: 'Sunglasses', price: 14.99, quantity: 20 },
];

const calculateSubtotal = (items) => {
  let subtotal = 0;

  for (let i = 0; i < items.length; i++) {
    subtotal += items[i]['price'] * items[i]['quantity'];
  }

  return subtotal;
};

console.log(calculateSubtotal(clothingItems));

const applyDiscount = (items, subtotalLogic, discount) => {
  const subtotal = subtotalLogic(items);

  return subtotal - subtotal * discount;
};

console.log(applyDiscount(clothingItems, calculateSubtotal, 0.05));

const calculateTax = (discountLogic, taxRate) => {
  // Tax calculation assumes the main VAT rate of 7.5% in Nigeria
  const tax = discountLogic * taxRate;
  return discountLogic + tax;
};

console.log(calculateTax(applyDiscount(clothingItems, calculateSubtotal, 0.05), 0.075));

const calculateTotal = (subtotalFn, discountFn, taxFn, items, discount, tax) => {
  return parseFloat(taxFn(discountFn(items, subtotalFn, discount), tax)).toFixed(2);
};

console.log(calculateTotal(calculateSubtotal, applyDiscount, calculateTax, clothingItems, 0.05, 0.075));
