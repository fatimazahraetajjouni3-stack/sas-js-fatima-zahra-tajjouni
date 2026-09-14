/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · CHALLENGE
 * LE GESTIONNAIRE D'INVENTAIRE DE L'AVENTURIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer l'inventaire (sac à dos) d'un héros dans un jeu vidéo, en utilisant uniquement des fonctions pour manipuler la "mémoire" globale.
 *
 * Consignes :
 * 1. Déclarez une variable globale (hors des fonctions) or = 0.
 * 2. Créez une fonction ajouterOr(montant) qui ajoute à la bourse et affiche "Vous avez ramassé [montant] or. Total: [or]".
 * 3. Créez une fonction depenserOr(montant) qui vérifie si le héros a assez d'or. Si oui, déduit l'or et affiche l'achat. Sinon, affiche "Fonds insuffisants".
 * 4. Créez une fonction combatGagne() qui appelle ajouterOr avec un montant aléatoire entre 10 et 50.
 * 5. Simulez une aventure : gagnez 3 combats, puis tentez d'acheter une épée à 100 or.
 * Bonus : Utilisez des closures pour éviter d'avoir or en variable globale vulnérable !
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day03/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
const creerBourse = () => {

    let or = 0;
    const ajouterOr = (montant) => {
        or += montant;
        console.log(`Vous avez ramassé ${montant} or. Total: ${or} or.`);
    };
    const depenserOr = (montant, objet = "votre achat") => {
        if (or >= montant) {
            or -= montant;
            console.log(`Achat réussi : Vous avez acheté ${objet} pour ${montant} or. Restant : ${or} or.`);
            return true;
        } else {
            console.log(`Fonds insuffisants pour acheter ${objet} (${montant} or nécessaires). Vous n'avez que ${or} or.`);
            return false;
            }
    };
    const combatGagne = () => {
        const montantAleatoire = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
        ajouterOr(montantAleatoire);
    };
    return {
        ajouterOr,
        depenserOr,
        combatGagne
    };
};
const heros = creerBourse();
console.log("--- Début de l'aventure ---");
heros.combatGagne();
heros.combatGagne();
heros.combatGagne();
console.log("\n--- Tentative d'achat à la boutique ---");
heros.depenserOr(100, "une épée");