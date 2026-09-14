/**
 * JOUR 03 — GUIDE 01
 * Créer sa première fonction
 *
 * OBJECTIF
 * Créez une fonction nommée saluer qui prend un nom en paramètre et qui retourne la chaîne de caractères "Bonjour, [nom] !". Testez-la.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';
function saluer(nom) {
    return `Bonjour, ${nom} !`;
}
const test1 = saluer("Thomas");
console.log(test1); 
const test2 = saluer("Sarah");
console.log(test2); 
console.log(saluer("Alice"));
