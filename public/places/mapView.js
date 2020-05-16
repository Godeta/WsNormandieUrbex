//carte avec leaflet js, ne pas oublier mapid dans le css

// On commence à 0,0 et zoom 6
const mymap = L.map('WhereMap').setView([0, 0], 6);
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'; //toujours créditer openstreetmap

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'; //s ->tile, z-> zoom, x et y -> position
const tiles = L.tileLayer(tileUrl, {
    attribution
});
//liste des marqueurs à ajouter :
//les tours
tiles.addTo(mymap);
const marker = L.marker([51.5, -0.09]).addTo(mymap)
    .bindPopup('Les tours, aussi appelé vestiges concasseur sur google map')
    .openPopup(); //il faut cliquer dessus pour voir le texte

// les grottes

// les bunkers

//maison abandonnée

// endroit grave cool titou