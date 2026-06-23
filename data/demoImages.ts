const pexels = (id: number, width = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export const demoImages = {
  restaurant: {
    hero: pexels(14965996, 2000),
    about: pexels(262978, 1400),
    dishes: [
      pexels(14965996, 900),
      pexels(5531093, 900),
      "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=85",
    ],
    gallery: [
      pexels(5531093, 1200),
      pexels(14266694, 1200),
      pexels(262978, 1200),
      pexels(20545313, 1200),
      pexels(14965996, 1200),
      pexels(262978, 1200),
    ],
  },
  landscaping: {
    hero: pexels(37480476, 2000),
    mowing: pexels(11937296, 1200),
    trimming: pexels(4920293, 1200),
    garden: pexels(12792322, 1200),
    before: pexels(11937296, 1400),
    after: pexels(37480476, 1400),
    gallery: [
      pexels(12792322, 1200),
      pexels(37480476, 1200),
      pexels(4920293, 1200),
      pexels(12792322, 1200),
    ],
  },
  barber: {
    hero: pexels(2061820, 1800),
    interior: pexels(9146943, 1400),
    tools: pexels(1319459, 1200),
    cut: pexels(7781845, 1200),
    gallery: [
      pexels(2061820, 1200),
      pexels(9146943, 1200),
      pexels(13058812, 1200),
      pexels(7781845, 1200),
    ],
  },
};
