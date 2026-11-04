test('isPalindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  expect(isPalindrome('hello')).toBe(false);
});

test('countVowels', () => {
  expect(countVowels('Hello World')).toBe(3);
  expect(countVowels('rhythm')).toBe(0);
});

test('isAnagram', () => {
  expect(isAnagram('Listen', 'Silent')).toBe(true);
  expect(isAnagram('dormitory', 'dirty room')).toBe(true);
  expect(isAnagram('abc', 'abd')).toBe(false);
});

test('reverseWords', () => {
  expect(reverseWords('one two three')).toBe('three two one');
  expect(reverseWords('  hi   there ')).toBe('there hi');
});
