const backgrounds = [
  {"image": "arches.jpg", "park": "Arches National Park"},
  {"image": "canyonlands.jpg", "park": "Canyonlands National Park"},
  {"image": "caperoyal.jpg", "park": "Grand Canyon National Park"},
  {"image": "cublake.jpg", "park": "Rocky Mountain National Park"},
  {"image": "denali.jpg", "park": "Denali National Park and Preserve"},
  {"image": "fishercap.jpg", "park": "Glacier National Park"},
  {"image": "glacier.jpg", "park": "Glacier National Park"},
  {"image": "hallet.jpg", "park": "Rocky Mountain National Park"},
  {"image": "iceberg.jpg", "park": "Glacier National Park"},
  {"image": "longspeak.jpg", "park": "Rocky Mountain National Park"},
  {"image": "mcdonald.jpg", "park": "Glacier National Park"},
  {"image": "prismatic.jpg", "park": "Yellowstone National Park"},
  {"image": "wynn.jpg", "park": "Glacier National Park"},
  {"image": "yosemitefalls.jpg", "park": "Yosemite National Park"},
  {"image": "meigsfalls.jpg", "park": "Great Smoky Mountains National Park"},
  {"image": "samoa.jpg", "park": "National Park of America Samoa"},
  {"image": "wallowawhitman.jpg", "park": "Wallowa-Whitman National Forest"},
  {"image": "wallowawhitman2.jpg", "park": "Wallowa-Whitman National Forest"},
  {"image": "acadia.jpg", "park": "Acadia National Park"},
  {"image": "volcanoes.jpg", "park": "Hawaii Volcanoes National Park"},
  {"image": "everglades.jpg", "park": "Everglades National Park"}
];

const chooseBackground = () => backgrounds[Math.floor(Math.random() * backgrounds.length)];

export default chooseBackground;