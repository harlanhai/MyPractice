Function.prototype.uncurring = function () {
  var self = this;
  return function () {
    var obj = Array.prototype.shift.call(arguments);
    return self.apply(obj, arguments);
  };
};

var push = Array.prototype.push.uncurring();
var obj = {};
push(obj, "first", "two");
console.log(obj); // {0: "first", 1: "two"}
