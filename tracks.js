// Portfolio data for the two player sections.
// NOTE: unlike the Antarctic Studios site, the hierarchy object here is spelled
// correctly ("hierarchy") and is split per section: `bass` has genres only,
// `production` has credits + genres. Edited by the site editor's track tabs.

const hierarchy = {
  "bass": {
    "genresBroad": {
      "Rock": [
        "Alternative Rock",
        "Classic Rock"
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
    "title": "Demo Artist - Placeholder Groove",
    "file": "audio/demo-bass.wav",
    "artwork": "img/portfolio/placeholder-1.svg",
    "genresBroad": ["Funk & Soul"],
    "genres": ["Funk"]
  },
  {
    "title": "Demo Artist - Placeholder Rocker",
    "file": "audio/demo-bass.wav",
    "artwork": "img/portfolio/placeholder-2.svg",
    "genresBroad": ["Rock"],
    "genres": ["Classic Rock"]
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
