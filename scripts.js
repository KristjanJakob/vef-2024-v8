/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { findLongestWord, findShortestWord, countVowels, countConsonants, checkPalindrome, reverseString } from './lib/helpers.js'; 

const textareaElement = document.querySelector('#string');
const formElement = document.querySelector('form');
const outputElement = document.querySelector('.output');

function displayResults(longest, shortest, vowels, consonants, palindrome, reversed) {
    document.querySelector('.longest').textContent = longest;
    document.querySelector('.shortest').textContent = shortest;
    document.querySelector('.vowels').textContent = vowels;
    document.querySelector('.consonants').textContent = consonants;
    document.querySelector('.palindrome').textContent = palindrome ? 'er' : 'er ekki';
    document.querySelector('.reversed').textContent = reversed;
    outputElement.classList.remove('hidden'); 
}

function analyzeText(inputText) {
    const longestWord = findLongestWord(inputText);
    const shortestWord = findShortestWord(inputText);
    const vowelsCount = countVowels(inputText);
    const consonantsCount = countConsonants(inputText);
    const isPalindrome = checkPalindrome(inputText);
    const reversedText = reverseString(inputText);

    displayResults(longestWord, shortestWord, vowelsCount, consonantsCount, isPalindrome, reversedText);
}

function submitHandler(event) {
    event.preventDefault();
    const inputText = textareaElement.value;
    analyzeText(inputText);
}

function resetHandler(event) {
    textareaElement.value = '';
    
    outputElement.classList.add('hidden');
}

textareaElement.addEventListener('input', () => {
    const inputText = textareaElement.value;
    analyzeText(inputText);
});

formElement.addEventListener('submit', submitHandler);

formElement.addEventListener('reset', resetHandler);



