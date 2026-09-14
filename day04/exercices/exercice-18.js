/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * CURRYFICATION (CURRYING)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction multiplicateur(facteur) qui retourne une fonction prenant un argument nombre et retournant nombre * facteur.
 * Testez avec : const double = multiplicateur(2); console.log(double(10)); // 20.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day03/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function multiplicateur(facteur) {
    return function(nombre) {
        return nombre * facteur;
    };
}
const doubler = multiplicateur(2);
const tripler = multiplicateur(3);
console.log(doubler(5));  
console.log(doubler(12)); 
console.log(tripler(5)); 
console.log(tripler(10)); 