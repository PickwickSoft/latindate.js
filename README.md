# latindate.js
[![GitHub license](https://img.shields.io/github/license/PickwickSoft/latindate.js)](https://github.com/PickwickSoft/latindate.js/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/PickwickSoft/latindate.js)](https://github.com/PickwickSoft/latindate.js/issues)
![Lines of code](https://img.shields.io/tokei/lines/github/Pickwicksoft/latindate.js)
[![GitHub stars](https://img.shields.io/github/stars/PickwickSoft/latindate.js)](https://github.com/PickwickSoft/latindate.js/stargazers)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/PickwickSoft/latindate.js)


A date converter converting normal dates into latin written dates.

## How to use latindate.js?

You can include this script on your website using this CDN:

```
https://cdn.jsdelivr.net/gh/PickwickSoft/latindate.js@v0.1.3/date.min.js
```

After that, use this method to generate the latin date:

```js
var yourDate = new Date("YYYY-MM-DD") // For current date use Date() without parameters
var latinDate = dateToLatinDate(yourDate); // Returns a String
```
**Important:** The Date class does not support the european date format `DD.MM.YYYY`!


_Make sure to pass the right format for a correct date in latin._

