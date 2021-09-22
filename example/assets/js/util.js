export function sum (x, y) {
  let yy = y ?? 1;
  return x + yy;
}

export function increase(x, y) {
  return x * y;
}

export async function oPromise(x, y) {  

  try {
    const promise1 = await res(x * y);
    const promise2 = await res(x * y);
    const promise3 = await res(x * y);
    
    Promise
      .all([promise1, promise2, promise3])
      .then(() => console.log('all done'))

  } catch (error) {
    
  }

  function res(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    })
  }

}