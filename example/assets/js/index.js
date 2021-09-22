// import $ from 'jquery';
import {
  sum,
  increase,
  oPromise
} from './util.js';

console.log(window.WebGL2RenderingContext);

var getAnswer = () => { console.log(`the answer is ${index$1}`); };

const w = $(window);

const o1 = sum(5);
const o2 = increase(o1, sum(1, 1));
const o3 = oPromise(o2, increase(1, 100));

console.log(o3);
getAnswer();
