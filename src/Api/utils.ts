import { FiltersI, GameI, SorterI } from "./games";

export function filter(data: GameI[], filters: FiltersI): GameI[] {
  const { name, state, tags } = filters;
  return data.filter((game) => {
    if (name && !game.name.toLowerCase().includes(name.toLowerCase()))
      return false;
    if (state?.length && !state.includes(game.state)) return false;
    if (tags?.length && !tags.some((tag) => game.tags.includes(tag)))
      return false;
    return true;
  });
}

export function sort(data: GameI[], sorter: SorterI): GameI[] {
  const { by, direction } = sorter;
  return data.sort((a, b) => {
    switch (by) {
      case "name":
        if (direction === "asc") return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
      case "price":
        if (direction === "asc") return (a.price || 0) - (b.price || 0);
        return (b.price || 0) - (a.price || 0);
      case "achievements":
        if (direction === "asc")
          return (a.achievements ? a.achievements[0] / a.achievements[1] : 0) - (b.achievements ? b.achievements[0] / b.achievements[1] : 0);
        return (b.achievements ? b.achievements[0] / b.achievements[1] : 0) - (a.achievements ? a.achievements[0] / a.achievements[1] : 0);
      case "score":
        if (direction === "asc")
          return (a.score?.finalMark || 0) - (b.score?.finalMark || 0);
        return (b.score?.finalMark || 0) - (a.score?.finalMark || 0);
    }
    return 0;
  });
}

export function autoId(): string {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let autoId = '';
  for (let i = 0; i < 20; i++) {
    autoId += CHARS.charAt(
      Math.floor(Math.random() * CHARS.length)
    )
  }
  return autoId;
}
