/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 05 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * LE TEST DU MODULO
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez une variable nombre = 15. Utilisez l'opérateur modulo % pour vérifier si le reste de sa division par 2 est égal à 0. Si c'est le cas, affichez "Pair", sinon "Impair".
 *
 * RÉSULTAT ATTENDU
 * Impair
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-05
 * ▶️ Commande : c
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let nombre = 16;
if(nombre % 2 == 0){
    console.log("le nombre est pair");
}else{
    console.log("le nombre est impair");
}
