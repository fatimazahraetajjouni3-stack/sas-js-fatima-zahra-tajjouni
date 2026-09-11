/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * SIMULATION DE SCRAPING : EXTRACTION PAGINÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Imaginez que vous "scrappez" des pages web numérotées. Vous avez un totalItems = 45, et chaque page affiche 10 éléments. Écrivez une boucle while qui affiche : "Scraping page 1 (10 items)", "Scraping page 2 (10 items)", jusqu'à la dernière page ("Scraping page 5 (5 items)").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day02/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const totalItems = 45;
const itemsPerPage = 10;
const  totalPage = Math.ceil(totalItems / itemsPerPage);
let currentPage = 1;
while (currentPage <= totalPage) {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    console.log(` Scraping de la page ${currentPage} / ${totalPage} (elements ${startItem} a ${endItem})...`);
    currentPage++;
}