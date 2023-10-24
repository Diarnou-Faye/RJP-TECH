<?php
$servername = "localhost"; // Remplacez par l'adresse du serveur de votre base de données
$username = "IEI"; // Remplacez par votre nom d'utilisateur MySQL
$password = "011001F"; // Remplacez par votre mot de passe MySQL
$dbname = "donnéeforestière"; // Remplacez par le nom de votre base de données

// Créer une connexion à la base de données
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}
?>