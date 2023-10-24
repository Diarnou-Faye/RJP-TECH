// map.js
// Exemple de script pour afficher une carte interactive (utilisant Leaflet)
var mymap = L.map('map').setView([13.41, -15.64], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

var marker = L.marker([13.41, -15.64]).addTo(mymap);
marker.bindPopup("Forêt sénégalaise");
