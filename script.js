// //SYNCHRONOUS PROGRAMING
console.log("YAsh is hacker");
console.log("Yash bhai is hecker");

// //ASYNCHRONOUS
// //FIRST THE WHOLE SCRIPT IS RUN AND THEN THE SETTIMEOUT FUNCTION WILL RUN
setTimeout(() => {
  console.log("I am inside timeout");
}, 2000);

setTimeout(() => {
  console.log("I am inside timeout_2");
}, 0);

console.log("the end");

// //CALLBACK
const callback = (arg) => {
  console.log(arg);
};
const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Yash");
  document.head.append(sc);
};

console.log("hey whats up");
setTimeout(() => {
  console.log("Hallo world");
}, 2000);
