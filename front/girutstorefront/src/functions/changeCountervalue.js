const decrease = (setCounter) => {
  setCounter((count) => (count > 0 ? (count = count - 1) : 1));
};

const increase = (setCounter) => {
  setCounter((count) => (count < 11 ? (count = count + 1) : 11));
};

module.exports = { decrease, increase };
