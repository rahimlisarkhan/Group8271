function sum(num1, num2) {
  return num1 + num2;
}

sum(7, 9);

(function sum2(a, b) {
  console.log(a + b);
  return a + b;
})(19, 16);

(function () {
  console.log("Test");
})();
