/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPTEUR D'OCCURRENCES DE LETTRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui compte combien de fois la lettre "e" (minuscule ou majuscule) apparaît dans un long paragraphe.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day05/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function compterE(texte) {
  const matches = texte.match(/e/gi);
  return matches ? matches.length : 0;
}
const paragraphe = "Le chiffrement de César est une méthode simple d'encodage de texte.";
console.log(compterE(paragraphe));