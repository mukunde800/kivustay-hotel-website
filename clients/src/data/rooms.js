export const rooms = [
  {
    slug: "standard",
    name: "Chambre Standard",
    type: "Standard",
    price: 80,
    capacity: 2,
    size: 22,
    description: "Chambre confortable avec vue jardin, idéale pour un séjour détente au calme.",
    longDescription:
      "Notre chambre Standard offre tout le confort nécessaire pour un séjour agréable. Lit queen-size, salle de bain privée avec douche, climatisation et vue paisible sur nos jardins tropicaux.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200",
    ],
    amenities: ["Wi-Fi", "TV satellite", "Climatisation", "Petit-déjeuner", "Coffre-fort"],
  },
  {
    slug: "deluxe",
    name: "Chambre Deluxe",
    type: "Deluxe",
    price: 150,
    capacity: 2,
    size: 35,
    description: "Vue panoramique sur le lac Kivu, balcon privé et lit king-size.",
    longDescription:
      "Profitez d'une vue imprenable sur les eaux scintillantes du lac Kivu depuis votre balcon privé. Literie haut de gamme, minibar et salle de bain en marbre pour un séjour raffiné.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
    ],
    amenities: ["Wi-Fi", "Balcon vue lac", "Minibar", "Room service", "Climatisation"],
  },
  {
    slug: "suite-junior",
    name: "Suite Junior",
    type: "Suite",
    price: 250,
    capacity: 3,
    size: 55,
    description: "Suite spacieuse avec salon séparé et baignoire jacuzzi.",
    longDescription:
      "Une suite élégante avec salon séparé, baignoire jacuzzi et grandes baies vitrées offrant une vue spectaculaire sur le lac. Parfaite pour les séjours prolongés ou les voyages d'affaires.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200",
    ],
    amenities: ["Jacuzzi", "Salon", "Vue lac", "Petit-déjeuner inclus", "Minibar"],
  },
  {
    slug: "suite-presidentielle",
    name: "Suite Présidentielle",
    type: "Suite",
    price: 500,
    capacity: 4,
    size: 95,
    description: "L'ultime expérience de luxe : 2 chambres, terrasse privée, majordome.",
    longDescription:
      "Notre suite la plus prestigieuse. Deux chambres spacieuses, une terrasse privée de 40 m² avec vue à 180° sur le lac, service de majordome dédié et spa privatif. Le summum du raffinement.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
    ],
    amenities: ["Majordome 24/7", "Terrasse privée", "2 chambres", "Spa privé", "Transfert VIP"],
  },
];

export const getRoomBySlug = (slug) => rooms.find((r) => r.slug === slug);