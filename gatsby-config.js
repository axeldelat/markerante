require("dotenv").config({
  path: `.env`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["article", "category", "writer"],
        singleTypes: [`homepage`, `global`],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Markerante - Guía de Marketing para Restaurantes",
        short_name: "Markerante",
        start_url: "/",
        background_color: "#E50F1C",
        theme_color: "#E50F1C",
        display: "minimal-ui",
        icon: `src/images/markerante-icon.png`
      },
    },
    "gatsby-plugin-offline",

    //Tailwind CSS
    "gatsby-plugin-postcss",
  ],

};