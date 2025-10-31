// Coordinates for known projects.
const sites = [
  {
    coords: [15.4989, 73.8278],
    type: 'waste',
    label: 'Panjim Smart Waste Hub'
  },
  {
    coords: [15.2729, 73.9583],
    type: 'waste',
    label: 'Margao Circular Community'
  },
  {
    coords: [15.2800, 73.9700],
    type: 'waste',
    label: 'Project SAIM MRF - GIDC Nessai'
  },
  {
    coords: [15.2649, 73.9415],
    type: 'museum',
    label: 'Goa Chitra Museum'
  },
  {
    coords: [15.2571, 73.9187],
    type: 'hotel',
    label: 'Taj Exotica Resort & Spa'
  }
];

const typeColors = {
  waste: "#81c784",
  museum: "#ffd24c",
  hotel: "#388e3c"
};

const map = L.map('goa-map').setView([15.3, 73.92], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

sites.forEach(site => {
  const marker = L.circleMarker(site.coords, {
    radius: 12,
    color: typeColors[site.type],
    fillColor: typeColors[site.type],
    fillOpacity: 0.85
  }).addTo(map);
  marker.bindPopup(`<b>${site.label}</b>`);
});
