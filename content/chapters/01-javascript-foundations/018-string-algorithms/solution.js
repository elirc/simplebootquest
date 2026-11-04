function isPalindrome(text) {
  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}

function countVowels(text) {
  let count = 0;
  for (const ch of text.toLowerCase()) {
    if ('aeiou'.includes(ch)) count++;
  }
  return count;
}

function isAnagram(a, b) {
  const normalise = (s) => s.toLowerCase().replace(/\s/g, '').split('').sort().join('');
  return normalise(a) === normalise(b);
}

function reverseWords(sentence) {
  return sentence.trim().split(/\s+/).reverse().join(' ');
}
