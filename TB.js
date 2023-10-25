<!-- Graphique à barres -->
<canvas id="barChart" width="400" height="200"></canvas>

<!-- Données importantes -->
<div>
    <h2>Données importantes</h2>
    <ul>
        <li>Donnée 1 : Valeur 1</li>
        <li>Donnée 2 : Valeur 2</li>
        <li>Donnée 3 : Valeur 3</li>
    </ul>
</div>

<!-- Autres éléments du tableau de bord -->
<div>
    <!-- Ajoutez ici d'autres éléments, graphiques, tableaux, etc. -->
</div>

<!-- Script JavaScript pour initialiser le graphique à barres -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    // Données pour le graphique à barres (exemple)
    var data = {
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai"],
        datasets: [{
            label: "Taux de croissance du Carbonne",
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255,69, 10, 9.2)',
                'rgba(0, 0, 255, 3.5)',
                'rgba(255, 206, 0, 3.2)',
                'rgba(75, 192, 192, 3.2)',
                'rgba(153, 0, 255, 3.2)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Options du graphique à barres
    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Créer un graphique à barres
    var ctx = document.getElementById('barChart').getContext('2d');
    var myBarChart = new Chart(ctx, {type: 'bar', data: data, options: options});
</script>
