// map.js
var mymap = L.map('map').setView([13.41, -15.64], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

// Exemple de marqueur sur la carte
var marker = L.marker([13.41, -15.64]).addTo(mymap);
marker.bindPopup("Forêt sénégalaise");

// Ajoutez d'autres fonctionnalités Leaflet selon vos besoins
