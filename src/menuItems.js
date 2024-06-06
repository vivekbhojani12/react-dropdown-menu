export const menuItems = [
  {
    title: "Select Item",
    submenu: [
      {
        id: 1,
        title: "Gender",
        pId: null,
        submenu: [
          {
            id: 4,
            title: "Masculine",
            pId: 1,
            particleType: "Masculine",
            children: [],
          },
          {
            id: 5,
            title: "Femenine",
            pId: 1,
            particleType: "Femenine",
            children: [],
          },
          {
            id: 6,
            title: "Neutral",
            pId: 1,
            particleType: "Neutral",
            children: [],
          },
        ],
      },

      {
        id: 2,
        title: "Articles",
        pId: null,
        submenu: [
          {
            id: 7,
            title: "Defined Articles",
            pId: 2,
            submenu: [
              {
                id: 9,
                title: "Nominative",
                pId: 7,
                submenu: [
                  {
                    id: 10,
                    title: "Masculine",
                    pId: 9,
                    particleType: "Masculine",
                    children: [],
                  },
                  {
                    id: 11,
                    title: "Femenine",
                    pId: 9,
                    particleType: "Femenine",
                    children: [],
                  },
                  {
                    id: 12,
                    title: "Neutral",
                    pId: 9,
                    particleType: "Neutral",
                    children: [],
                  },
                ],
              },
            ],
          },

          {
            id: 8,
            title: "Undefined Articles",
            pId: 2,
            submenu: [
              {
                id: 13,
                title: "Accusative",
                pId: 8,
                submenu: [
                  {
                    id: 14,
                    title: "Masculine",
                    pId: 13,
                    children: [],
                  },
                  {
                    id: 15,
                    title: "Femenine",
                    pId: 13,
                    particleType: "Femenine",
                    children: [],
                  },
                  {
                    id: 16,
                    title: "Neutral",
                    pId: 13,
                    particleType: "Neutral",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Pronuons",
        pId: null,
        children: [],
      },
    ],
  },
];
