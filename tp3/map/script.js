var map = L.map('map').setView([47.73053625740514, 7.301106594972997], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var mmi = L.marker([47.729676332716345, 7.301596366122114]).addTo(map);
var geii = L.marker([47.73106221532263, 7.301709893898334]).addTo(map);
var gea = L.marker([47.73058655268663, 7.300522216751584]).addTo(map);

var polygon = L.polygon([
    [47.73152955277342, 7.3005156679940075],
    [47.731091095551406, 7.302293544998064],
    [47.72903434788839, 7.301492299585406],
    [47.729418364659956, 7.2994808158295665]
]).addTo(map);

mmi.bindPopup("<b>MMI!</b>");
geii.bindPopup("<b>GEII!</b>");
gea.bindPopup("<b>GEA!</b>");

