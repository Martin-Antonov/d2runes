export const tables = [
  {
    hero: 'Sorceress', tables: [
      {key: 'FCR', frames: [13, 12, 11, 10, 9, 8, 7], percentage: [0, 9, 20, 37, 63, 105, 200]},
      {
        key: 'FCR (L/CL)',
        frames: [19, 18, 17, 16, 15, 14, 13, 12, 11],
        percentage: [0, 7, 15, 23, 35, 52, 78, 117, 194]
      },
      {
        key: 'FHR',
        frames: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
        percentage: [0, 5, 9, 14, 20, 30, 42, 60, 86, 142, 280]
      },
      {key: 'FBR', frames: [9, 8, 7, 6, 5, 4, 3], percentage: [0, 7, 15, 27, 48, 86, 200]},
    ]
  },
  {
    hero: 'Amazon', tables: [
      {key: 'FCR', frames: [19, 18, 17, 16, 15, 14, 13, 12, 11], percentage: [0, 7, 14, 22, 32, 48, 68, 99, 152]},
      {key: 'FHR', frames: [11, 10, 9, 8, 7, 6, 5, 4, 3], percentage: [0, 6, 13, 20, 32, 52, 86, 174, 600]},
      {
        key: 'FBR (OHW)',
        frames: [17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
        percentage: [0, 4, 6, 11, 15, 23, 29, 40, 56, 80, 120, 200, 480]
      },
      {key: 'FBR (OW)', frames: [5, 4, 3, 2, 1], percentage: [0, 13, 32, 86, 600]},
    ],
  },
  {
    hero: 'Assassin', tables: [
      {key: 'FCR', frames: [16, 15, 14, 13, 12, 11, 10, 9], percentage: [0, 8, 16, 27, 42, 65, 102, 174]},
      {key: 'FHR', frames: [9, 8, 7, 6, 5, 4, 3], percentage: [0, 7, 15, 27, 48, 86, 200]},
      {key: 'FBR', frames: [5, 4, 3, 2, 1], percentage: [0, 13, 32, 86, 600]},
    ],
  },
  {
    hero: 'Barbarian', tables: [
      {key: 'FCR', frames: [13, 12, 11, 10, 9, 8, 7], percentage: [0, 9, 20, 37, 63, 105, 200]},
      {key: 'FHR', frames: [9, 8, 7, 6, 5, 4, 3], percentage: [0, 7, 15, 27, 48, 86, 200]},
      {key: 'FBR', frames: [7, 6, 5, 4, 3, 2], percentage: [0, 9, 20, 42, 86, 280]},
    ],
  },
  {
    hero: 'Druid (Human Form)', tables: [
      {key: 'FCR', frames: [18, 17, 16, 15, 14, 13, 12, 11, 10], percentage: [0, 4, 10, 19, 30, 46, 68, 99, 163]},
      {
        key: 'FHR (OHW)',
        frames: [4, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4],
        percentage: [0, 3, 7, 13, 19, 29, 42, 63, 99, 174, 456]
      },
      {
        key: 'FHR (OW)',
        frames: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4],
        percentage: [0, 5, 10, 16, 26, 39, 56, 86, 152, 377]
      },
      {key: 'FBR', frames: [11, 10, 9, 8, 7, 6, 5, 4, 3], percentage: [0, 6, 13, 20, 32, 52, 86, 174, 600]},
    ],
  },
  {
    hero: 'Druid (Bear Form)', tables: [
      {key: 'FCR', frames: [16, 15, 14, 13, 12, 11, 10, 9], percentage: [0, 7, 15, 26, 40, 63, 99, 163]},
      {key: 'FHR', frames: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4], percentage: [0, 5, 10, 16, 24, 37, 54, 86, 152, 360]},
      {key: 'FBR', frames: [12, 11, 10, 9, 8, 7, 6, 5, 4], percentage: [0, 5, 10, 16, 27, 40, 65, 109, 223]},
    ],
  },
  {
    hero: 'Druid (Wolf Form)', tables: [
      {key: 'FCR', frames: [16, 15, 14, 13, 12, 11, 10, 9], percentage: [0, 6, 14, 26, 40, 60, 95, 157]},
      {key: 'FHR', frames: [7, 6, 5, 4, 3, 2], percentage: [0, 9, 20, 42, 86, 280]},
      {key: 'FBR', frames: [9, 8, 7, 6, 5, 4, 3], percentage: [0, 7, 15, 27, 48, 86, 200]},
    ],
  },
  {
    hero: 'Necromancer', tables: [
      {key: 'FCR', frames: [15, 14, 13, 12, 11, 10, 9], percentage: [0, 9, 18, 30, 48, 75, 125]},
      {key: 'FHR', frames: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4], percentage: [0, 5, 10, 16, 26, 39, 56, 86, 152, 377]},
      {key: 'FBR', frames: [11, 10, 9, 8, 7, 6, 5, 4, 3], percentage: [0, 6, 13, 20, 32, 52, 86, 174, 600]},
    ],
  },
  {
    hero: 'Necromancer (Vampire Form)', tables: [
      {
        key: 'FCR',
        frames: [23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13],
        percentage: [0, 6, 11, 18, 24, 35, 48, 65, 86, 120, 180]
      },
      {key: 'FHR', frames: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6], percentage: [0, 2, 6, 10, 16, 24, 34, 48, 72, 117]},
      {key: 'FBR', frames: [11, 10, 9, 8, 7, 6, 5, 4, 3], percentage: [0, 6, 13, 20, 32, 52, 86, 174, 600]},
    ],
  },
  {
    hero: 'Paladin', tables: [
      {key: 'FCR', frames: [15, 14, 13, 12, 11, 10, 9], percentage: [0, 9, 18, 30, 48, 75, 125]},
      {
        key: 'FHR (Sp/St)',
        frames: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4],
        percentage: [0, 3, 7, 13, 20, 32, 48, 75, 129, 280]
      },
      {key: 'FHR (OW)', frames: [9, 8, 7, 6, 5, 4, 3], percentage: [0, 7, 15, 27, 48, 86, 200]},
      {key: 'FBR', frames: [5, 4, 3, 2, 1], percentage: [0, 13, 32, 86, 600]},
      {key: 'FBR (HS)', frames: [2, 1], percentage: [0, 86]},
    ],
  },
]
