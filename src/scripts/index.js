import '../styles/index.scss';
import '../../node_modules/leaflet/dist/leaflet.css';

$(document).ready(function() {
    var mymap = L.map('search-map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
});