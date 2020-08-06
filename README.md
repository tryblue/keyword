# keyword

Keyword matching algorithm 

### Thanks to
- [@Sodex234](https://github.com/sodex234) – Algorithm
- [@aabbccsmith](https://github.com/aabbccsmith) – Types and publishing

### Usage

```js
import matchKeyword from 'blue-keyword';

const products = ['Tagful Tee', 'Rectangle Logo', 'Crewneck'];
const product = products.find(product => matchKeyword(product, '+Tagful, -Tagless'));

console.log(product); // => 'Tagful Tee'
```
