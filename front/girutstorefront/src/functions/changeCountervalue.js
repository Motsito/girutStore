// Function to decrease the counter value
const decrease = (setCounter) => {
  setCounter((count) => (count > 0 ? (count = count - 1) : 1));
};

// Function to increase the counter value
const increase = (setCounter) => {
  setCounter((count) => (count < 11 ? (count = count + 1) : 11));
};

// Export the decrease and increase functions for use in other modules
module.exports = { decrease, increase };
