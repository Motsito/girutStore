// Function to calculate the total cost of items in a shopping cart
export default function getCartAmmount(array) {
  let total = 0; // Initialize a variable to store the total cost

  // Iterate through each item in the array (shopping cart)
  array.forEach((item) => {
    const { price, quantity } = item; // Destructure the price and quantity from the item

    // Calculate the total cost for the current item (price * quantity)
    const itemTotal = price * quantity;

    // Add the item's total cost to the overall total
    total += itemTotal;
  });

  return total; // Return the total cost of all items in the shopping cart
}
