// https://www.codewars.com/kata/5b16490986b6d336c900007d

/**
 * Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)
 */
function myLanguages(results) {

}

console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }));
// Resultado esperado: ["Ruby", "Python"]

console.log(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }));
// Resultado esperado: ["Dutch", "Greek", "Hindi"]

console.log(myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 }));
// Resultado esperado: []
