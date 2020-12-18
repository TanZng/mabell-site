module.exports = {
  pathPrefix: "/mabell-site",
  siteMetadata: {
    description: "Pagina personal de Mabell Zuniga",
    locale: "es",
    title: "Mabell Zuniga",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        theme: {
          'back': '#edf0f3',
          'front': '#2b3137',
          'lead': '#b17acc',
          'lead-text': '#ffffff',
          'line': '#ced9e3',
          'skill-1': '#405060',
          'skill-2': '#59c156',
          'skill-3': '#0d96f2',
        },
      },
    },
  ],
}