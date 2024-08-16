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

  return parseFloat(subtotal - subtotal * discount).toFixed(2);
};

console.log(applyDiscount(clothingItems, calculateSubtotal, 0.05));
