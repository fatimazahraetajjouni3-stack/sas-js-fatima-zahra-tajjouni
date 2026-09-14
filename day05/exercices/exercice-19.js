/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VALIDATEUR DE PLAQUE D'IMMATRICULATION (REGEX BASIQUE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Simulez la vérification d'une plaque d'immatriculation marocaine. Le format attendu est "1234-A-56" ou "12345-AB-6". Pour simplifier, vérifiez qu'elle contient deux tirets et qu'une des sections au milieu est une lettre. L'utilisation d'expressions régulières (Regex) est recommandée ici !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day05/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function verifierPlaqueMaroc (plaque){
    const regexPlaque = /^\d{1,5}-[a-zA-Z\u0600-\u06FF]{1,2}-\d{1,2}$/;
    return regexPlaque.test(plaque.trim());
}
console.log(verifierPlaqueMaroc("1234-A-56")); 
console.log(verifierPlaqueMaroc("12345-AB-6")); 
console.log(verifierPlaqueMaroc("789-أ-26"));
console.log(verifierPlaqueMaroc("1234-56-78"));
console.log(verifierPlaqueMaroc("1234A56"));