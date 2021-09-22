(function () {
  'use strict';

  function sum(x, y) {
    let yy = y ?? 1;
    return x + yy;
  }
  function increase(x, y) {
    return x * y;
  }
  async function oPromise(x, y) {
    try {
      const promise1 = await res(x * y);
      const promise2 = await res(x * y);
      const promise3 = await res(x * y);
      Promise.all([promise1, promise2, promise3]).then(() => console.log('all done'));
    } catch (error) {}

    function res(time) {
      return new Promise(resolve => {
        setTimeout(resolve, time);
      });
    }
  }

  // import $ from 'jquery';
  console.log(window.WebGL2RenderingContext);

  var getAnswer = () => {
    console.log(`the answer is ${index$1}`);
  };

  $(window);
  const o1 = sum(5);
  const o2 = increase(o1, sum(1, 1));
  const o3 = oPromise(o2, increase(1, 100));
  console.log(o3);
  getAnswer();

}());
