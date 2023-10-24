<?php
// Inclure le fichier de configuration de la base de données
include('configDB.php');

// Requête pour récupérer des données depuis la base de données
$sql = "SELECT * FROM donnees_tableau_de_bord";
$result = $conn->query($sql);

// Vérifier s'il y a des données à afficher
if ($result->num_rows > 0) {
    // Afficher les données dans un tableau HTML
    echo "<table>";
    echo "<tr><th>Nom</th><th>Valeur</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["nom"] . "</td><td>" . $row["valeur"] . "</td></tr>";
    }
    echo "</table>";
} else {
    echo "Aucune donnée à afficher.";
}

// Fermer la connexion à la base de données
$conn->close();
?>
