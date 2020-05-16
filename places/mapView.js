//carte avec leaflet js, ne pas oublier mapid dans le css

// On commence à 0,0 et zoom 6
const mymap = L.map('WhereMap').setView([49.179018, -0.301710], 10);
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'; //toujours créditer openstreetmap

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'; //s ->tile, z-> zoom, x et y -> position
const tiles = L.tileLayer(tileUrl, {
    attribution
});
//liste des marqueurs à ajouter :
//les tours
tiles.addTo(mymap);
L.marker([49.106187, -0.385655]).addTo(mymap)
    .bindPopup('<a href = "../Description/tours.html" >Les tours, aussi appelé vestiges concasseur sur google map, coord : 49.106187, -0.385655 </a>'); //il faut cliquer dessus pour voir le texte

// les grottes
tiles.addTo(mymap);
L.marker([49.155564, -0.371525]).addTo(mymap)
    .bindPopup('Les grottes de Caen sur le chemin des carrières, coord : 49.155564, -0.371525'); //il faut cliquer dessus pour voir le texte

// les bunkers
//bunker 1
tiles.addTo(mymap);
L.marker([49.285376, -0.189309]).addTo(mymap)
    .bindPopup('Bunker allemand Merville-Franceville plage, coord : 49.285376, -0.189309'); //il faut cliquer dessus pour voir le texte

//gros bunker
tiles.addTo(mymap);
L.marker([49.283657, -0.221304]).addTo(mymap)
    .bindPopup('Gros Bunker sur lequel on peut monter, coord : 49.283657, -0.221304'); //il faut cliquer dessus pour voir le texte

//espèce de chateau à merville
tiles.addTo(mymap);
L.marker([49.282374, -0.218620]).addTo(mymap)
    .bindPopup('Une sorte de château/ ancien edifice militaire autrement appelé la redoute, coord : 49.282374, -0.218620'); //il faut cliquer dessus pour voir le texte

//mini bunker, je ne sais pas lequel
tiles.addTo(mymap);
L.marker([49.281495, -0.224896]).addTo(mymap)
    .bindPopup('Un mini bunker, coord : 49.281495, -0.224896'); //il faut cliquer dessus pour voir le texte

//bunker boite de nuit (pas sûr de où c'est, y'a une maison abandonnée pas loin)
tiles.addTo(mymap);
L.marker([49.274464, -0.215778]).addTo(mymap)
    .bindPopup('Bunker transformé en boite de nuit abandonnée avec une maison abandonnée pas loin (environ par là), coord : 49.274464, -0.215778'); //il faut cliquer dessus pour voir le texte

//bunker ? - bunker boite de nuit ?
tiles.addTo(mymap);
L.marker([49.269451, -0.220943]).addTo(mymap)
    .bindPopup('Bunker pas sûr lequel, peut être celui de la boite de nuit, coord : 49.269451, -0.220943');

//tour de refroidissement
tiles.addTo(mymap);
L.marker([49.192447, -0.306044]).addTo(mymap)
    .bindPopup('Ancienne tour de refroidissement de Collombelles, coord : 49.192447, -0.306044');

//tour de pierre
tiles.addTo(mymap);
L.marker([49.211150, -0.279927]).addTo(mymap)
    .bindPopup('Une petite tour faites de pierres assemblées au milieu du petit bois, coord : 49.211150, -0.279927');

//maison abandonnée
tiles.addTo(mymap);
L.marker([49.179078, -0.340776]).addTo(mymap)
    .bindPopup('<a href = "../Description/maisAB.html" >Maison abandonnée dans le coin vers le début de Caen, il y en a une autre plus loin (cf Nico), coord : 49.179078, -0.340776 </a>'); //il faut cliquer dessus pour voir le texte

// endroit grave cool titou
tiles.addTo(mymap);
L.marker([49.154766, -0.368643]).addTo(mymap)
    .bindPopup('Endroit gigantesque découvert par hasard en vélo, il y a aussi une sorte de tour avec escaliers, coord : 49.154766, -0.368643'); //il faut cliquer dessus pour voir le texte

//grange brulée
tiles.addTo(mymap);
L.marker([49.248021, -0.223945]).addTo(mymap)
    .bindPopup('Pas loin de Amfreville, les restes d\' une grange qui a brulée, coord : 49.248021, -0.223945');