# keyword

Keyword matching algorithm

### Usage

```js
import matchKeyword from 'blue-keyword';

const products = ['Tagful Tee', 'Rectangle Logo', 'Crewneck'];
const product = products.find(product => matchKeyword(product, '+Tagful, -Tagless'));

console.log(product); // => 'Tagful Tee'
```
