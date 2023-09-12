export default function getCartAmmount(array) {
  let total = 0;

  array.forEach((item) => {
    const { price, quantity } = item;
    const itemTotal = price * quantity;
    total += itemTotal;
  });

  return total;
}
