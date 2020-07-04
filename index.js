/**
 * Matches keywords to a product
 * @param {string} productName The name of the product
 * @param {string} keywords The keywords in +, - format
 */
const matchKeyword = (productName, keywords) => {
  const name = productName.toLowerCase().trim();
  return (
    keywords
      .toLowerCase()
      .split(",")
      .map((keyword) => keyword.trim())
      .filter(
        (word) =>
          (word.includes("+") && !name.includes(word.substr(1))) ||
          (word.includes("-") && name.includes(word.substr(1)))
      ).length === 0
  );
};

module.exports = matchKeyword;
