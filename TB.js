// script.js
// Exemple de fonction pour afficher des données dans la section principale
function afficherDonnees() {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = '<h2>Données Analytiques</h2><p>Voici quelques données analytiques à afficher.</p>';
}

// Appeler la fonction lors du chargement de la page
window.addEventListener('load', afficherDonnees);
