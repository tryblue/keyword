declare module 'blue-keyword' {
  /**
   * Matches keywords to a product
   * @param productName The name of the product
   * @param keywords The keywords in +, - format
   */
  function matchKeyword(productName: string, keywords: string): boolean;
  export = matchKeyword;
}
