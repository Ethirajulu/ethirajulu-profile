module.exports = {
  siteMetadata: {
    title: `Ethirajulu Sukumar`,
    description: `Full stack web developer`,
    author: `@ethi`,
    linkedIn: "https://www.linkedin.com/in/ethirajulu-sukumar-261723155/",
    github: "https://github.com/Ethirajulu",
    name: "ETHIRAJULU SUKUMAR",
    occupation: "Full stack developer, TN, India",
    description:
      "I am a full stack web developer with 5+ years of experience in developing high preferment and user friendly web and mobile applications.",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ethirajulu Sukumar`,
        short_name: `Ethi`,
        description: `This app shows the profile of Ethirajulu Sukumar`,
        start_url: `/`,
        background_color: `#c73a64`,
        theme_color: `#c73a64`,
        display: `minimal-ui`,
        icon: `src/images/app-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    "gatsby-plugin-styled-components",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
