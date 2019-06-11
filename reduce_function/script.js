function First() { return Promise.resolve(1); };
function Second(res) { return Promise.resolve(res + 13); };
function Third(res) { return Promise.resolve(res + 2); };
function Last(res) { console.log(res) };

const arrPromise = [First, Second, Third, Last];


 function summ(arr) {
  arr.reduce((prevValue, currentValue) => prevValue.then(currentValue), Promise.resolve());
}


// // summ(arrPromise);
// let promise = new Promise()
// let promises = [promise1, promise2, promiseN];

// promises.reduce(function(cur, next) {
//   return cur.then(next);
// }, RSVP.resolve()).then(function() {
//   //all executed
// });