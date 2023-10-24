<?php
// Inclure le fichier de configuration
include('config.php');

// Exemple de requête pour sélectionner des données dans la base de données
$sql = "SELECT nom, age, pays FROM utilisateurs";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "Nom: " . $row["nom"] . " - Âge: " . $row["age"] . " - Pays: " . $row["pays"] . "<br>";
    }
} else {
    echo "Aucun résultat trouvé.";
}

// Fermer la connexion à la base de données
$conn->close();
?>
