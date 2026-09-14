/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPTAGE DE MOTS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Comptez le nombre de mots dans une longue chaîne. *Attention aux espaces multiples !* (Un mot est généralement séparé par un espace).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day05/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function compterMots(chaine) {
  const mots = chaine.trim().split(/\s+/);
  if (mots.length === 1 && mots[0] === "") {
    return 0;
  }

  return mots.length;
}
console.log(compterMots("  Bonjour   le   monde  ")); 
console.log(compterMots("   "));