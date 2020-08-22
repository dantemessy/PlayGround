/* --------------------------> Memoization <-------------------------- */

const memoize = fun => {
    const cache = new Map;
    return value => {
      if (cache.has(value)) return cache.get(value);
      cache.set(value, fun(value))
      return cache.get(value);
    }
  }
  
  // example 
  const looper = memoize(val => {
    let result = 0;
  
    for (let i = 0; i < val; i++) {
      for (let j = 0; j < val; j++) {
        result++;
      }
    }
    return result;
  })
  
  console.time("First Looper")
  console.log("looper", looper(10000));
  console.timeEnd("First Looper");
  
  console.time("with Memoize")
  console.log("looper", looper(10000));
  console.timeEnd("with Memoize");
  