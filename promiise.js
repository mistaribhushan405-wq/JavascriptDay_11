console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes i am done");
      resolve("yash");
    }, 2000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes i am done 2");
      resolve("yash 2");
    }, 1000);
  }
});


// Promise.all  Promise.race  Promise.allSettled  Promise.resolve
let p3 = Promise.reject([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});
