var cipher = function cipherInit() {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var i = 0;
};


function cipher(text) {
  var result = '';
  var chr = text[i];
  var idx = alphabet.indexOf(chr.toUpperCase());
  var newIdx = idx + 13;
  if (newIdx >= alphabet.length) {
    newIdx -= 26;
  }
  result += alphabet[newIdx];
  return result;
}

function mapChar(chr) {
  return chr.split('').map(cipher).join('');
}



var encrypted = mapChar('NFF');
console.log(encrypted);
