function factorial(n) {
  if (n < 0) return null;
  let res = [1];
  for (let i = 1; i <= n; i++) {
      for (let j = 0, carry = 0; j < res.length || carry > 0; j++) {
          carry += (res[j] || 0) * i;
          res[j] = carry % 10;
          carry = carry / 10 | 0;
      }
  }
  return res.reverse().join('');
}
