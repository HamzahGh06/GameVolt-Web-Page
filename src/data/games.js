const createGameImage = (title) => {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180" viewBox="0 0 300 180">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4c6ef5" />
      <stop offset="100%" stop-color="#5c7cfa" />
    </linearGradient>
  </defs>
  <rect width="300" height="180" fill="url(#g)" />
  <text x="50%" y="50%" font-size="18" fill="#fff" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif">${title}</text>
</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const games = [
  { id: 1, title: "Elden Ring", genre: "RPG", price: 60, rating: 9.5, image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg" },
  { id: 2, title: "Cyberpunk 2077", genre: "Action", price: 40, rating: 8.5, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/a757b56d2078be8b09a04e2ad531f1fefafaa129/capsule_616x353.jpg?t=1769690377" },
  { id: 3, title: "Minecraft", genre: "Sandbox", price: 20, rating: 9.0, image: "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png" },
  { id: 4, title: "God of War", genre: "Action", price: 50, rating: 9.2, image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg" },
  { id: 5, title: "The Witcher 3", genre: "RPG", price: 30, rating: 9.6, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/ad9240e088f953a84aee814034c50a6a92bf4516/header.jpg?t=1768303991" },
  { id: 6, title: "FC 26", genre: "Sports", price: 70, rating: 7.5, image: "https://image.api.playstation.com/vulcan/ap/rnd/202507/1617/2e757ffb0a6bb4b91af84db64e0183d725e56e5354f45eba.png" },
  { id: 7, title: "Valorant", genre: "Shooter", price: 10, rating: 8.0, image: "https://xboxwire.thesourcemediaassets.com/sites/2/2024/08/Val-Console-Launch-Hero-1080-__-GAME-STORES-80b474d3ff38615edd0a-1900x1080.jpg" },
  { id: 8, title: "Stardew Valley", genre: "Simulation", price: 15, rating: 9.3, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1754692865" },
  { id: 9, title: "Hades", genre: "Roguelike", price: 25, rating: 9.1, image: "https://www.gamegrin.com/assets/game/hades/_resampled/croppedimage1201631-hades-background.jpg" },
  { id: 10, title: "Among Us", genre: "Party", price: 5, rating: 7.0, image: "https://stanforddaily.com/wp-content/uploads/2020/11/among-us.png" }
];
