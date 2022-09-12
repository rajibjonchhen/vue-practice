Vue.createApp({
  data() {
    return {
      user: "Rajib",
      links: ["Home", "About", "Books"],
    };
  },
}).mount("header");

Vue.createApp({
  data() {
    return {
      books: [
        {
          id: 1,
          title: "The new beginning",
          img:"",
          description: `
                    What is a quote about new beginnings?
Image result for the new beginnings
“No matter how hard the past is, you can always begin again.” “Every day is a chance to begin again. Don't focus on the failures of yesterday, start today with positive thoughts and expectations.” “Forgiveness says you are given another chance to make a new beginning.”
                    `,
        },
        {
          id: 2,
          title: "The second new beginning",
          description: `
                    What is a quote about new beginnings?
Image result for the new beginnings
“No matter how hard the past is, you can always begin again.” “Every day is a chance to begin again. Don't focus on the failures of yesterday, start today with positive thoughts and expectations.” “Forgiveness says you are given another chance to make a new beginning.”
                    `,
        },
      ],
    };
  },
}).mount("main");
