var test = {
    fizz : 'buzz',
    foo: null,
    bar: 42
}
console.log(test)

function clean(obj) {
    for (var propName in obj) { 
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
  }
  
  clean(test);
  console.log(test)