// EXAMPLE 1 - Split a string by Space in JavaScript

const str = 'bobby hadz com';

const arr = str.split(' ');

// 👇️ [ 'bobby', 'hadz', 'com' ]
console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Split a String by Multiple Spaces in JavaScript

// const str = '  bobby    hadz    com  ';

// const arr = str.trim().split(/\s+/);
// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Split a String keeping the Whitespace in JavaScript

// const str = 'bobby hadz com';

// const arr = str.split(/(\s+)/);

// // 👇️ [ 'bobby', ' ', 'hadz', ' ', 'com' ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Split a String keeping the Whitespace using `split()` and `join()`

// const str = 'bobby hadz com';

// const result = str.split(' ').join('# #').split('#');
// console.log(result); // 👉️ [ 'bobby', ' ', 'hadz', ' ', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Split String and remove surrounding Spaces in JavaScript

// const str = 'bobby - hadz - com';

// const arr = str.split('-').map(element => element.trim());
// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 6 - Dealing with multiple consecutive separators

// const str = ' one -- two -- three ';

// const arr = str
//   .split('-')
//   .map(element => element.trim())
//   .filter(element => element !== '');

// console.log(arr); // 👉️ ['one', 'two', 'three']

// ------------------------------------------------------------------

// // EXAMPLE 7 - Split String and remove surrounding Spaces using `replaceAll()`

// const str = 'bobby - hadz - com';

// const arr = str.replaceAll(' ', '').split('-');

// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 8 - Split String and remove surrounding Spaces using regex

// const str = 'bobby - hadz - com';

// const arr = str.trim().split(/\s*-\s*/);
// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 9 - Split a String by Space or Comma using JavaScript

// const str = 'bobby hadz, com';

// const result = str.split(/[, ]+/);

// console.log(result); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 10 - Split a string by whitespace or comma

// const str = 'bobby \t\n   hadz,,,,\n com';

// const result = str.split(/[,\s]+/);

// console.log(result); // 👉️ [ 'bobby', 'hadz', 'com' ]
