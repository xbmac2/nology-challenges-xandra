// # Delayed inc/dec

// 1. Create a function called `delayedIncDec(n, mode, timeout)`

// - n: Initial number
// - mode: A string - either "inc" or "dec"
// - timeout: delay time in ms - should have a default time of 2.5 seconds if not provided
//   `delayedIncDec` returns a promise that resolves to the initial number increment or decremented - think about what might cause this promise to reject

// 2. Call this function three times with different values of n, modes, and timeouts
// 3. Log each value to the console.

const delayedIncDec = (n, mode, timeout = 2500) => {
  return new Promise((resolve, reject) => {
    if (typeof n !== 'number') {
      reject(new Error('n must be a number'))
    };
    if (mode.toLowerCase() !== 'inc' && mode.toLowerCase() !== 'dec') {
      reject(new Error('Mode must be inc or dec'))
    };
    if (timeout < 0) {
      reject(new Error('Timeout must be positive'))
    };
    setTimeout(() => {
      if (mode === "inc") {
        return resolve(n + 1);
      };
      if (mode === "dec") {
        return resolve(n - 1);
      };
      reject(new Error('there was an error'));
    }, timeout)
  });
};

//if n isnot a number, if mode isnt inc or dec, if timeout is a negative number (timeout must be a positive number)

delayedIncDec(5, "dec").then((result) => console.log(result));
delayedIncDec(0, "dec", 1500).then((result) => console.log(result));
delayedIncDec(90, "inc", 1000).then((result) => console.log(result));
delayedIncDec("one", "inc", 3000).catch((e) => console.log(e.message));
///think of what could cause errors
// if (typeof n !== 'number') {
//   reject(new Error('n must be a number'))
// }
// if (mode.toLowerCase() !== 'inc' && mode.toLowerCase() !== 'dec') {
//   reject(new Error('Mode must be inc or dec'))
// }
// if (timeout < 0) {
//   reject(new Error('Timeout must be positive'))
// }
/// 


// # Delayed filter

// 1. Create a function called `delayedFilter(array, callback, timeout)`

// - n: Initial Array
// - callback: a filter function
// - timeout: delay time in ms - should have a default time of 2.5 seconds if not provided
//   `delayedFilter` returns a promise that resolves to the filtered array- think about what might cause this promise to reject

// 2. Call this function three times with different values of array, callback, timeout
// 3. Log each result to the console.

const delayedFilter = (array, callback, timeout = 2500) => {
  return new Promise((resolve, reject) => {
    if (typeof callback !== 'function') {
      reject(new Error('callback must be a function'))
    };
    if (!Array.isArray(array)) {
      reject(new Error("array must be an array"))
    };
    if (timeout < 0) {
      reject(new Error('Timeout must be positive'))
    };
    setTimeout(() => {
      //return resolve(array.filter(callback));
      //what will make it reject? if callback isn't function of array isn't array
      const filtered = array.filter(callback);
      resolve(filtered);
    }, timeout)
  });
};