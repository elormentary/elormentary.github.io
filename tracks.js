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
        "Progressive Rock",
        "Post-Punk",
        "Metal"
      ],
      "Funk & Soul": [
        "Funk",
        "R&B"
      ],
      "Jazz": [
        "Jazz Fusion"
      ],
      "Country": [
        "Modern Country",
        "Pop Country"
      ],
      "Pop": [
        "Singer-Songwriter",
        "Electronic"
      ]
    }
  },
  "production": {
    "creditsBroad": {
      "Production": [
        "Produced",
        "Engineering",
        "Writing",
        "Co-writing"
      ],
      "Mixing & Mastering": [
        "Mixing",
        "Mastering"
      ]
    },
    "genresBroad": {
      "Rock": [
        "Alternative Rock",
        "Classic Rock",
        "Progressive Rock",
        "Post-Punk",
        "Metal"
      ],
      "Electronic": [
        "Synthwave",
        "Ambient",
        "Video Game"
      ],
      "Pop": [
        "Singer-Songwriter",
        "Christmas",
        "R&B",
        "Hip-Hop"
      ]
    }
  }
};

const bassTracks = [
  {
    "title": "Galanthus - Fallwind",
    "file": "audio/Galanthus_-_Fallwind.mp3",
    "artwork": "img/portfolio/galnthus3.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Hamza Rehman - 3AM",
    "file": "audio/3_AM_Final_Master.mp3",
    "artwork": "img/portfolio/crossroads.webp",
    "genresBroad": ["Pop"],
    "genres": ["Singer-Songwriter"]
  },
  {
    "title": "Sweet Fiend - Holy Demons",
    "file": "audio/Sweet_Fiend_-_Holy_Demons_Bass.mp3",
    "artwork": "img/portfolio/sweetfiend.webp",
    "genresBroad": ["Rock"],
    "genres": ["Metal"]
  },
  {
    "title": "Jade Hilton - Toxic Marathon",
    "file": "audio/Jade_Hilton_-_Toxic_Marathon_Bass.mp3",
    "artwork": "img/portfolio/toxicmarathon.webp",
    "genresBroad": ["Country"],
    "genres": ["Pop Country"]
  },
  {
    "title": "Hamza Rehman - Don't Let Me Down'",
    "file": "audio/DLMD_Final_Master.mp3",
    "artwork": "img/portfolio/crossroads.webp",
    "genresBroad": ["Pop"],
    "genres": ["Singer-Songwriter"]
  },
  {
    "title": "Galanthus - Wall Animal",
    "file": "audio/Galanthus_-_Wall_Animal.mp3",
    "artwork": "img/portfolio/galnthus3.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Lydia Kim - Flamingo",
    "file": "audio/Lydia_Kim_-_Flamingo.mp3",
    "artwork": "img/portfolio/flamingo_placeholder.webp",
    "genresBroad": ["Pop"],
    "genres": ["Singer-Songwriter"]
  },
  {
    "title": "Galanthus - Big Dawn",
    "file": "audio/Galanthus_-_Big_Dawn.mp3",
    "artwork": "img/portfolio/galnthus3.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Arcane - Pretend Lovers",
    "file": "audio/Arcane_-_Pretend_Lovers.mp3",
    "artwork": "img/portfolio/arcane-pretendlovers.webp",
    "genresBroad": ["Funk & Soul"],
    "genres": ["R&B"]
  },
  {
    "title": "Arcane - Eternity",
    "file": "audio/Arcane_-_Eternity.mp3",
    "artwork": "img/portfolio/arcane-sorry-for-the-mess.webp",
    "genresBroad": ["Funk & Soul"],
    "genres": ["R&B"]
  },
  {
    "title": "Galanthus - The Flowing Iliad",
    "file": "audio/Galanthus_-_The_Flowing_Iliad.mp3",
    "artwork": "img/portfolio/galanthus_impact.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Galanthus - Ichor",
    "file": "audio/Galanthus_-_Ichor.mp3",
    "artwork": "img/portfolio/galanthus_impact.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Hamza Rehman - Line on a Page",
    "file": "audio/Line_on_a_Page_Final_Master.mp3",
    "artwork": "img/portfolio/crossroads.webp",
    "genresBroad": ["Pop"],
    "genres": ["Singer-Songwriter"]
  },
  {
    "title": "Hamza Rehman - Catch My Eye",
    "file": "audio/Catch_My_Eye_Final_Master.mp3",
    "artwork": "img/portfolio/crossroads.webp",
    "genresBroad": ["Pop"],
    "genres": ["Singer-Songwriter"]
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
    "title": "Galanthus - Challenge Beyond",
    "file": "audio/Galanthus_-_Challenge_Beyond.mp3",
    "artwork": "img/portfolio/galanthus_purple.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Galanthus - Haven",
    "file": "audio/Galanthus_-_Haven.mp3",
    "artwork": "img/portfolio/galanthus_impact.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },

  {
    "title": "Galanthus - Kessler Syndrome",
    "file": "audio/Galanthus_-_Kessler_Syndrome.mp3",
    "artwork": "img/portfolio/galanthus_kessler.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Galanthus - Mover",
    "file": "audio/Galanthus_-_Mover.mp3",
    "artwork": "img/portfolio/galanthus_selftitled.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Galanthus - Purple Horizon",
    "file": "audio/Galanthus_-_Purple_Horizon.mp3",
    "artwork": "img/portfolio/galanthus_purple.webp",
    "genresBroad": ["Rock"],
    "genres": ["Progressive Rock"]
  },

  
  {
    "title": "High Tea - Cure Michael",
    "file": "audio/High_Tea_-_Cure_Michael_MST_V1.mp3",
    "artwork": "img/portfolio/high_tea_split_fissure.webp",
    "genresBroad": ["Rock"],
    "genres": ["Post-Punk"]
  },
  {
    "title": "High Tea - I Don't Need To Not Know That",
    "file": "audio/High_Tea_-_I_Don_t_Need_To_Not_Know_That_MST_V1.mp3",
    "artwork": "img/portfolio/idontneedto.webp",
    "genresBroad": ["Rock"],
    "genres": ["Post-Punk"]
  },
  {
    "title": "High Tea - I'm Tryna Smoke In The Hospital",
    "file": "audio/High_Tea_-_I_m_Tryna_Smoke_In_The_Hospital_MST_V1.mp3",
    "artwork": "img/portfolio/high_tea_split_fissure.webp",
    "genresBroad": ["Rock"],
    "genres": ["Post-Punk"]
  },
  {
    "title": "High Tea - My Dad Can Lift Your Dad",
    "file": "audio/High_Tea_-_My_Dad_Can_Lift_Your_Dad_MST_V1.mp3",
    "artwork": "img/portfolio/high_tea_split_fissure.webp",
    "genresBroad": ["Rock"],
    "genres": ["Post-Punk"]
  },
  {
    "title": "High Tea - Supertoys Last All Summer Long",
    "file": "audio/High_Tea_-_Supertoys_MST_V1.mp3",
    "artwork": "img/portfolio/high_tea_split_fissure.webp",
    "genresBroad": ["Rock"],
    "genres": ["Post-Punk"]
  },


  {
    "title": "fried.mix - Good Morning",
    "file": "audio/Michael_Friedman_Fried.Mix_-_Good_Morning_MASTER_Bass.mp3",
    "artwork": "img/portfolio/friedmix_gm.webp",
    "genresBroad": ["Pop"],
    "genres": ["Electronic"]
  },
];

const productionTracks = [
  {
    "title": "Consider The Source - Closer To Home",
    "file": "audio/Consider_The_Source_-_Closer_to_Home_Cover_Produced_Engineered_Mixed_Mastered.mp3",
    "artwork": "img/portfolio/considerthesoure.webp",
    "creditsBroad": ["Production","Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Produced","Engineering","Mixing","Mastering"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Dungblaster - Detsaw",
    "file": "audio/Dungblaster_-_Detsaw_Elormentary_Mix_Mastered.mp3",
    "artwork": "img/portfolio/placeholder1.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mixing","Mastering"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Hamza Rehman - 3AM",
    "file": "audio/Hamza_Rehman_-_3_AM_Elormentary_Version_-_Produced_Engineered_Mixed_Mastered.mp3",
    "artwork": "img/portfolio/3am.webp",
    "creditsBroad": ["Production","Mixing & Mastering"],
    "genresBroad": ["Pop"],
    "credits": ["Produced","Engineering","Mixing","Mastering"],
    "genres": ["Singer-Songwriter"]
  },
  {
    "title": "Hamza Rehman - Catch My Eye",
    "file": "audio/Hamza_Rehman_-_Catch_My_Eye_Elormentary_Version_-_Produced_Engineered_Mixed_Mastered.mp3",
    "artwork": "img/portfolio/crossroads.webp",
    "creditsBroad": ["Production","Mixing & Mastering"],
    "genresBroad": ["Pop"],
    "credits": ["Produced","Engineering","Mixing","Mastering"],
    "genres": ["Singer-Songwriter"]
  },
  {
    "title": "High Tea - Cure Michael",
    "file": "audio/High_Tea_-_Cure_Michael_Demo_Mix_Mastered.mp3",
    "artwork": "img/portfolio/high_tea_split_fissure.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mixing","Mastering"],
    "genres": ["Post-Punk"]
  },
  {
    "title": "High Tea - I'm Tryna Smoke In The Hospital",
    "file": "audio/High_Tea_-_I_m_Tryna_Smoke_In_The_Hospital_Demo_Mix_Mastered.mp3",
    "artwork": "img/portfolio/high_tea_split_fissure.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mastering","Mixing"],
    "genres": ["Post-Punk"]
  },
  {
    "title": "High Tea - I Don't Need To Not Know This",
    "file": "audio/High_Tea_-_IDN2NKT_Demo_Mix_Mastered.mp3",
    "artwork": "img/portfolio/idontneedto.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mixing","Mastering"],
    "genres": ["Post-Punk"]
  },
  {
    "title": "High Tea - My Dad Can Lift Your Dad",
    "file": "audio/High_Tea_-_My_Dad_Can_Lift_Your_Dad_Demo_Mix_Mastered.mp3",
    "artwork": "img/portfolio/high_tea_split_fissure.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mixing","Mastering"],
    "genres": ["Post-Punk"]
  },
  {
    "title": "High Tea - Supertoys",
    "file": "audio/High_Tea_-_SuperToys_Demo_Mix_Mastered.mp3",
    "artwork": "img/portfolio/high_tea_split_fissure.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mixing","Mastering"],
    "genres": ["Post-Punk"]
  },
  {
    "title": "I, Assailant - Within Thy Self",
    "file": "audio/I_Assailant_-_Within_Thy_Self_Elormentary_Mix_Mastered.mp3",
    "artwork": "img/portfolio/iassailant_placeholder.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mixing","Mastering"],
    "genres": ["Metal"]
  },
  {
    "title": "Kelseidoscope - Christmas Jingle",
    "file": "audio/Kelseidoscope_-_Christmas_Jingle_Co-wrote_Produced_Engineered_Mixed_Mastered.mp3",
    "artwork": "img/portfolio/placeholder_xmas.webp",
    "creditsBroad": ["Mixing & Mastering","Production"],
    "genresBroad": ["Pop"],
    "credits": ["Co-writing","Produced","Engineering","Mixing","Mastering"],
    "genres": ["Christmas"]
  },
  {
    "title": "Kelseidoscope - Jigglypuff Song",
    "file": "audio/Kelseidoscope_-_Jigglypuff_Song_Produced_Engineered_Mixed_Mastered.mp3",
    "artwork": "img/portfolio/jigglypuff.webp",
    "creditsBroad": ["Production","Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Produced","Engineering","Mastering","Mixing"],
    "genres": ["Alternative Rock"]
  },
  {
    "title": "Kilcasa - Distance",
    "file": "audio/Kilcasca_-_Distance_Mix_Mastered.mp3",
    "artwork": "img/portfolio/kilcasa_distance_placeholder.jpeg",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Pop"],
    "credits": ["Mastering","Mixing"],
    "genres": ["R&B"]
  },
  {
    "title": "Kilcasa - Tangerine",
    "file": "audio/Kilcasca_-_Tangerine_Mastered.mp3",
    "artwork": "img/portfolio/tangerine.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Pop"],
    "credits": ["Mastering"],
    "genres": ["R&B","Hip-Hop"]
  },
  {
    "title": "King Crimson - Deception of the Thrush",
    "file": "audio/King_Crimson_-_Deception_of_the_Thrush_Cover_Produced_Engineered_Mixed_Mastered.mp3",
    "artwork": "img/portfolio/kingcrimson.jpg",
    "creditsBroad": ["Production","Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Produced","Mixing","Mastering","Engineering"],
    "genres": ["Progressive Rock"],
    "disclaimer": "Cover, not the original."
  },
  {
    "title": "Palymra - Indescipt",
    "file": "audio/Palymra_-_Indescipt_Elormentary_Mix_Mastered.mp3",
    "artwork": "img/portfolio/palymra_placeholder.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mastering","Mixing"],
    "genres": ["Metal"]
  },
  {
    "title": "Redshift - Cordial",
    "file": "audio/RedShift_-_Cordial_Elormentary_Master.mp3",
    "artwork": "img/portfolio/cordialredshift.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mastering"],
    "genres": ["Alternative Rock"]
  },
  {
    "title": "Sonic Advance 2 - Leaf Forest",
    "file": "audio/Sonic_Advance_2_Cover_-_Leaf_Forest_Beta_Cover_Produced_Engineered_Mixed_Mastered.wav",
    "artwork": "img/portfolio/Leaf_forest.webp",
    "creditsBroad": ["Mixing & Mastering","Production"],
    "genresBroad": ["Electronic"],
    "credits": ["Produced","Engineering","Mixing","Mastering"],
    "genres": ["Video Game"],
    "disclaimer": "Cover, not the original."
  },
  {
    "title": "Standalone Complex - The Worth in Vain and Sin",
    "file": "audio/Standalone_Complex_-_The_Worth_in_Vain_and_Sin_Elormentary_Mix_Mastered.mp3",
    "artwork": "img/portfolio/standalonecomplex_placeholder.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mixing","Mastering"],
    "genres": ["Metal"]
  },
  {
    "title": "Super Monkey Ball 2 - Monkey Billiards",
    "file": "audio/Super_Monkey_Ball_2_-_Monkey_Billiards_Cover_Engineered_Mixed_Mastered.mp3",
    "artwork": "img/portfolio/SMB2_Logo.webp",
    "creditsBroad": ["Production","Mixing & Mastering"],
    "genresBroad": ["Electronic"],
    "credits": ["Engineering","Mixing","Mastering","Produced"],
    "genres": ["Video Game"],
    "disclaimer": "Cover, not the original."
  },
  {
    "title": "The Alchemy Index - Moros",
    "file": "audio/The_Alchemy_Index_-_Moros_Elormentary_Mix_Mastered.mp3",
    "artwork": "img/portfolio/alchemyindex-placeholder.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mixing","Mastering"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Adrian Poonstar - Lets Not Talk About It",
    "file": "audio/v.2_Adrian_Poonstar_-_Let_s_Not_Talk_About_It_-_Master-2025-10-05.mp3",
    "artwork": "img/portfolio/poonstar_nottalk.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Pop"],
    "credits": ["Mastering"],
    "genres": ["R&B"]
  },
  {
    "title": "Yeho Bloho - IDFN",
    "file": "audio/Yeho_Bloho_-_IDFN_Demo_Mix_Mastered.mp3",
    "artwork": "img/portfolio/bloho_placeholder.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mixing","Mastering"],
    "genres": ["Progressive Rock"]
  },
  {
    "title": "Yeho Bloho - Stonerish",
    "file": "audio/Yeho_Bloho_-_Stonerish_Demo_Mix_Mastered.mp3",
    "artwork": "img/portfolio/bloho_placeholder.webp",
    "creditsBroad": ["Mixing & Mastering"],
    "genresBroad": ["Rock"],
    "credits": ["Mixing","Mastering"],
    "genres": ["Progressive Rock"]
  }
];
