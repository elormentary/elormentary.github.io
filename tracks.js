// Portfolio data for the two player sections.
// NOTE: unlike the Antarctic Studios site, the hierarchy object here is spelled
// correctly ("hierarchy") and is split per section: `bass` has genres only,
// `production` has credits + genres. Edited by the site editor's track tabs.

const hierarchy = {
  "bass": {
    "genresBroad": {
      "Rock": [
        "Alternative Rock",
        "Classic Rock",
        "Progressive Rock"
      ],
      "Funk & Soul": [
        "Funk",
        "R&B"
      ],
      "Jazz": [
        "Jazz Fusion"
      ]
    }
  },
  "production": {
    "creditsBroad": {
      "Production": [
        "Produced",
        "Engineering",
        "Writing"
      ],
      "Mixing & Mastering": [
        "Mixing",
        "Mastering"
      ]
    },
    "genresBroad": {
      "Rock": [
        "Alternative Rock",
        "Classic Rock"
      ],
      "Electronic": [
        "Synthwave",
        "Ambient"
      ]
    }
  }
};

const bassTracks = [
  {
    "title": "Arcane - Eternity",
    "file": "audio/Arcane_-_Eternity.mp3",
    "artwork": "img/portfolio/arcane-sorry-for-the-mess.webp",
    "genresBroad": ["Funk & Soul"],
    "genres": ["R&B"]
  },
  {
    "title": "Arcane - Pretend Lovers",
    "file": "audio/Arcane_-_Pretend_Lovers.mp3",
    "artwork": "img/portfolio/arcane-pretendlovers.webp",
    "genresBroad": ["Funk & Soul"],
    "genres": ["R&B"]
  },
  {
    "title": "Galanthus - A False Hope",
    "file": "audio/Galanthus_-_A_False_Hope.mp3",
    "artwork": "img/portfolio/galanthus_selftitled.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Galanthus - Ainodecam",
    "file": "audio/Galanthus_-_Ainodecam.mp3",
    "artwork": "img/portfolio/galanthus_impact.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Galanthus - Big Dawn",
    "file": "audio/Galanthus_-_Big_Dawn.mp3",
    "artwork": "img/portfolio/galnthus3.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Galanthus - Challenge Beyond",
    "file": "audio/Galanthus_-_Challenge_Beyond.mp3",
    "artwork": "img/portfolio/galanthus_purple.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  }
];

const productionTracks = [
  {
    "title": "Demo Artist - Placeholder Mix",
    "file": "audio/demo-mix.wav",
    "artwork": "img/portfolio/placeholder-2.svg",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mixing","Mastering"],
    "genres": ["Alternative Rock"]
  },
  {
    "title": "Demo Artist - Placeholder Production",
    "file": "audio/demo-bass.wav",
    "artwork": "img/portfolio/placeholder-1.svg",
    "creditsBroad": ["Production","Mixing & Mastering"],
    "genresBroad": ["Electronic"],
    "credits": ["Produced","Engineering","Mixing"],
    "genres": ["Synthwave"]
  }
];
