/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
export const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng eftir whitespace
 * stöfum (bil, nýlína o.fl.).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
export function splitOnWhitespace(str) {
  if (!isString(str)) {
    return [];
  }

  return str.split(/\s+/).filter(Boolean);
}
console.assert(
  splitOnWhitespace('halló heimur\nhæ').length === 3,
  'splitOnWhitespace: skilar fylki af lengd 3 ef þrjú orð eru gefin',
);

function cleanWord(word) {
  return word.replace(/[^\p{L}\p{N}]+/gu, ''); 
}

/**
 * Fall sem skilar lengsta orðinu úr streng
 * @param {string} str Strengur til að greina
 * @returns {string} Lengsta orðið í strengnum
 */
export function findLongestWord(str) {
  const words = str.split(/\s+/).map(cleanWord).filter(Boolean);
  return words.reduce((longest, word) => (word.length > longest.length ? word : longest), '');
}

/**
 * Fall sem skilar stysta orðinu úr streng
 * @param {string} str Strengur til að greina
 * @returns {string} Stysta orðið í strengnum
 */
export function findShortestWord(str) {
  const words = str.split(/\s+/).map(cleanWord).filter(Boolean);
  return words.reduce((shortest, word) => (word.length < shortest.length ? word : shortest), words[0]);
}


/**
 * Fall sem telur sérhljóða í streng
 * @param {string} str Strengur til að greina
 * @returns {number} Fjöldi sérhljóða í strengnum
 */
export function countVowels(str) {
  return (str.match(/[aeiouáéíóúýæö]/gi) || []).length;
}

/**
 * Fall sem telur samhljóða í streng
 * @param {string} str Strengur til að greina
 * @returns {number} Fjöldi samhljóða í strengnum
 */
export function countConsonants(str) {
  return (str.match(/[^aeiouáéíóúýæö\s\d\W]/gi) || []).length;
}

/**
 * Fall sem athugar hvort strengur sé samhverfur (palindrome)
 * @param {string} str Strengur til að athuga
 * @returns {boolean} True ef strengurinn er samhverfur, annars False
 */
export function checkPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Záéíóúýæö]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Fall sem snýr við streng
 * @param {string} str Strengur til að snúa við
 * @returns {string} Viðsnúinn strengur
 */
export function reverseString(str) {
  return str.split('').reverse().join('');
}