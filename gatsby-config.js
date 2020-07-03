/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Guillaume Raoult - développeur web',
		description: 'Guillaume Raoult, développeur web à Toulouse',
		author: '@ergeais',
		siteURL: 'https://ergeais.com',
		color: '#7bbfd4',
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `./src/content/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `./src/images/`,
			},
		},
	 	'gatsby-transformer-yaml',
		`gatsby-plugin-less`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: "gatsby-plugin-anchor-links",
			options: {
				offset: 0
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 900,
							linkImagesToOriginal: false
						},
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							inlineCodeMarker: '›',
							aliases: {},
							showLineNumbers: true,
							noInlineHighlight: false,
							prompt: {
								user: "root",
								host: "localhost",
								global: false,
							},
							escapeEntities: {},
						},
					},
				],
			},
		}
	],
}
