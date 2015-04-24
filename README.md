gen_bitmap
========

Create an bitmap object with key names specified in String or object

Usage
-----

`npm install gen_bitmap`

```javascript
var genBitmap = require('gen_enum');
var ColorFlags = genBitmap("blue red");
console.log(ColorFlags.blue); // output false

var StyleFlags = genBitmap(true, "rustic model minimalist");
console.log(StyleFlags.rustic); // output true

var CityFlags = genBitmap({Chengdu: true, Sydney: false});
console.log(CityFlags.Chengdu); //output true
console.log(CityFlags.Sydney); // output false

var DayFlags = genBitmap(true, {Mon: false, Tue: true});
console.log(DayFlags.Mon); // output true
```

Input:  `[defVal], "key1 key2 ..."`

Note
- keys could be separated by `space`, `,`, `;` and `:`
- defVal is optional. Once it is provided, it must be in boolean type, i.e. either `true` or `false`. If `defVal` is not provided, then default to use `false`

Output: 

```
{
    key1: defVal
    key2: defVal
}
```

Input variations
-----------------

Instead of a string of keys sepated by separators specified above, it can use another two variaions of input to specify keys:

```javascript

// use array of strings to specify keys
var ColorFlags = genBitmap(["blue", "red"]);
console.log(ColorFlags.blue); // output false

// use object to specify keys
var DayFlags = genBitmap({
    Monday: true,
    Tuesday: false
})
console.log(DayFlags.Monday); // output true

// use object with defVal
var ContinentFlags = genBitmap(true, {
    Asia: false,
    Europe: true
})
console.log(ContinentFlags.Asia); // output true
```

