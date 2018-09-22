# To Await

A node module which resolves errors in promises in tuples while using the await key word.

## Installation
```
npm install --save https://github.com/michaelolof/to-await/
```


## How to use

We can first define a module class

```
import to from 'await-to';

const [file, err] = await to( asyncFileRead("file.txt") )
if( err ) {
  throw new Error("Error occured while reading files").stack
}
console.log( file );
```

