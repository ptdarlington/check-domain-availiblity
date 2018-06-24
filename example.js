const checkDomainAvailability = require('./index');

// ES6 async/await
// (async function() {
//   const availiblity = await checkDomainAvailability('google.com');
//   console.log(availiblity);
// })();

// Promises
// checkDomainAvailability('google.com')
// .then(function(result) {
//   console.log(result);
// })
// .catch(function(error) {
//   console.log(error);
// });

// Short hand Promeses
checkDomainAvailability('google.com')
.then(console.log)
.catch(console.error)
