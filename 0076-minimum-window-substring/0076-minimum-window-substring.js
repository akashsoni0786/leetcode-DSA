/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  if (s === t) return s;

  let thm = new Map();
  for (let i = 0; i < t.length; i++) {
    thm.set(t[i], (thm.get(t[i]) || 0) + 1);
  }

  let l = 0;
  let r = 0;
  let requiredChars = thm.size;
  let formedChars = 0;
  let hm = new Map();
  let minLen = Infinity;
  let res = "";

  while (r < s.length) {
    const char = s[r];
    hm.set(char, (hm.get(char) || 0) + 1);

    if (thm.has(char) && hm.get(char) === thm.get(char)) {
      formedChars++;
    }

    while (formedChars === requiredChars && l <= r) {
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        res = s.slice(l, r + 1);
      }

      const leftChar = s[l];
      hm.set(leftChar, hm.get(leftChar) - 1);

      if (thm.has(leftChar) && hm.get(leftChar) < thm.get(leftChar)) {
        formedChars--;
      }

      l++;
    }

    r++;
  }

  return res;
};