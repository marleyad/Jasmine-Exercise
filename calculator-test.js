it('Hopefully will calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 9000,
    years: 8,
    rate: 4.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('111.81');
});


it("Return a result with 2 decimal places", function() {
  const values = {
    amount: 10743,
    years: 6,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('165.64');
});