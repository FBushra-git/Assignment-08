import tiles from "@/data/tiles.json";

// Get all tiles
export async function getAllTiles() {
  return tiles;
}

// Get single tile
export async function getTileById(id) {
  return tiles.find((t) => t.id === id);
}

// Featured tiles
export async function getFeaturedTiles() {
  return tiles.sort((a, b) => b.rating - a.rating).slice(0, 4);
}