module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Product Configurator",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: true, // to get the image urls relative to their declaration, and not the entry point
        sassOptions: {
          precision: 6, // for bootstrap 4
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: true, // Enable while using `gatsby develop`
    //     // tailwind: true, // Enable tailwindcss support
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //     purgeCSSOptions: {
    //       // https://purgecss.com/configuration.html#options
    //       // safelist: {
    //       //   standard: [/red/],
    //       //   deep: [/blue$/],
    //       //   greedy: [/yellow$/],
    //       // },
    //       safelist: [
    //         "html",
    //         "body",
    //         "collapse",
    //         "collapsing",
    //         /modal*/,
    //         /accordion*/,
    //         /card*/,
    //       ], // Don't remove this selector
    //     },
    //     // More options defined here https://purgecss.com/configuration.html#options
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "GA-OVICHANGETHIS",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}
