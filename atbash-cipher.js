function encode(string) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba0123456789';

  const alphaSplit = alpha.split('');
  const cipherSplit = cipher.split('');
  const stringSplit = string.toLowerCase().split('');
  const conversion = [];
  let counter = 0;

  let result = '';
  for (let i = 0; i < stringSplit.length; i++) {
    for (let j = 0; j < alphaSplit.length; j++) {
      if (stringSplit[i] === alphaSplit[j]) {
        if (counter >= 5) {
          counter = 0;
          conversion.push(' ');
        }
        conversion.push(cipherSplit[j]);
        counter++;
      }
      result = conversion.join('');
    }
  }
  return result;
}

module.exports = { encode };
