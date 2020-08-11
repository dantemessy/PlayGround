var foo = 1;


var foobar = function() {
  console.log(foo)
  var foo = 2;
}


foobar()